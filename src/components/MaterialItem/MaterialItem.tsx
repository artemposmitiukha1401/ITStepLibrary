"use client";

import Image from "next/image";
import {
  useEffect,
  useState,
  type CSSProperties,
  type MouseEvent,
  type ReactElement,
  type ReactPortal,
} from "react";
import { createPortal } from "react-dom";

export interface Material {
  id: number;
  preview: string;
  title: string;
  author: string;
  year: number;
  description: string;
  categories: string[];
  url: string;
}

interface MaterialItemProps {
  material: Material;
  isEven: boolean;
}

interface CategoryBadgeProps {
  label: string;
}

interface PdfButtonProps {
  size: "small" | "large";
  onClick: () => void;
}

interface PdfPreviewModalProps {
  material: Material;
  onClose: () => void;
}

type PreviewTarget = "mobile" | "desktop";

interface PreviewHoverState {
  target: PreviewTarget;
  top: number;
  left: number;
  width: number;
  height: number;
}

interface PreviewHoverPortalProps {
  material: Material;
  hoverState: PreviewHoverState;
}

const previewImageBaseStyle: CSSProperties = {
  transition: "transform 260ms ease",
  willChange: "transform",
};

const previewWrapperBaseStyle: CSSProperties = {
  transition: "transform 260ms ease, box-shadow 260ms ease",
  willChange: "transform",
};

const getPreviewHoverState = (
  target: PreviewTarget,
  rect: DOMRect,
  viewportWidth: number,
  viewportHeight: number
): PreviewHoverState => {
  const width: number = target === "mobile" ? 150 : 190;
  const height: number = target === "mobile" ? 190 : 240;
  const gap: number = 16;
  const preferredLeft: number = rect.right + gap;
  const unclampedLeft: number =
    preferredLeft + width <= viewportWidth ? preferredLeft : rect.left - width - gap;
  const left: number = Math.max(gap, Math.min(unclampedLeft, viewportWidth - width - gap));
  const preferredTop: number = rect.top + rect.height / 2 - height / 2;
  const top: number = Math.max(gap, Math.min(preferredTop, viewportHeight - height - gap));

  return {
    target,
    top,
    left,
    width,
    height,
  };
};

const CategoryBadge = ({ label }: CategoryBadgeProps): ReactElement => (
  <span className="px-2.5 py-1 rounded-md font-semibold tracking-wide inline-block bg-[#ECEEFF] text-[11px] text-[#5057D5]">
    {label}
  </span>
);

const PdfButton = ({ size, onClick }: PdfButtonProps): ReactElement => {
  const buttonSizeClass: string = size === "small" ? "w-9 h-9 shrink-0" : "w-11 h-11";
  const iconSize: number = size === "small" ? 18 : 22;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Preview PDF"
      className={`${buttonSizeClass} rounded-lg text-white inline-flex items-center justify-center bg-[#BA1A1A] transition-colors hover:bg-[#8f2922]`}
    >
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <path
          d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 2v6h6"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="5"
          y="20"
          fontSize="7"
          fontWeight="bold"
          fill="white"
          fontFamily="sans-serif"
        >
          PDF
        </text>
      </svg>
    </button>
  );
};

const PreviewHoverPortal = ({
  material,
  hoverState,
}: PreviewHoverPortalProps): ReactPortal =>
  createPortal(
    <div
      aria-hidden="true"
      className="pointer-events-none overflow-hidden rounded-lg bg-white shadow-2xl ring-2 ring-blue-accent/35"
      style={{
        height: `${hoverState.height}px`,
        left: `${hoverState.left}px`,
        position: "fixed",
        top: `${hoverState.top}px`,
        width: `${hoverState.width}px`,
        zIndex: 2147483646,
      }}
    >
      <Image src={material.preview} alt="" fill className="object-cover" />
    </div>,
    document.body
  );

const PdfPreviewModal = ({ material, onClose }: PdfPreviewModalProps): ReactPortal => {
  useEffect((): (() => void) => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    const previousBodyOverflow: string = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return (): void => {
      document.body.style.overflow = previousBodyOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="flex items-center justify-center bg-black/70 p-4"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2147483647,
      }}
      onMouseDown={onClose}
    >
      <div
        className="flex flex-col overflow-hidden rounded-[13px] bg-white shadow-2xl"
        style={{
          height: "calc(100vh - 32px)",
          maxWidth: "1280px",
          width: "100%",
        }}
        onMouseDown={(event: MouseEvent<HTMLDivElement>): void => event.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-[#E0E2F0] px-4 py-3">
          <div className="min-w-0">
            <p className="truncate font-title text-[18px] font-semibold text-[#171717]">
              {material.title}
            </p>
            <p className="truncate text-[13px] text-[#7A7A7A]">
              {material.author}, {material.year}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close PDF preview"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#444] transition-colors hover:bg-[#ECEEFF] hover:text-blue-accent"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 1l12 12M13 1L1 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <iframe
          src={`${material.url}#toolbar=0&navpanes=0&scrollbar=0`}
          title={`${material.title} PDF preview`}
          className="min-h-0 w-full flex-1"
          style={{
            border: 0,
            display: "block",
            height: "100%",
          }}
        />
      </div>
    </div>,
    document.body
  );
};


const MaterialItem = ({ material, isEven }: MaterialItemProps): ReactElement => {
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
  const [previewHoverState, setPreviewHoverState] = useState<PreviewHoverState | null>(null);
  const isMobilePreviewHovered: boolean = previewHoverState?.target === "mobile";
  const isDesktopPreviewHovered: boolean = previewHoverState?.target === "desktop";
  const showPreviewHover = (target: PreviewTarget, event: MouseEvent<HTMLDivElement>): void => {
    const rect: DOMRect = event.currentTarget.getBoundingClientRect();

    setPreviewHoverState(getPreviewHoverState(target, rect, window.innerWidth, window.innerHeight));
  };

  return (
    <div
      className={`border-b border-[#E0E2F0] last:border-b-0 ${isEven ? "bg-white" : "bg-[#F7F8FF]"
        }`}
    >
      <div className="md:hidden gap-3 px-4 py-4 flex">
        <div
          className="rounded-md relative shrink-0 overflow-hidden bg-[#E0E4F0]"
          onMouseEnter={(event: MouseEvent<HTMLDivElement>): void => showPreviewHover("mobile", event)}
          onMouseLeave={() => setPreviewHoverState(null)}
          style={{
            ...previewWrapperBaseStyle,
            boxShadow: isMobilePreviewHovered ? "0 10px 24px rgb(40 58 140 / 24%)" : "none",
            height: "104px",
            transform: isMobilePreviewHovered ? "scale(1.06)" : "scale(1)",
            width: "80px",
          }}
        >
          <Image
            src={material.preview}
            alt={material.title}
            fill
            className="object-cover"
            style={{
              ...previewImageBaseStyle,
              transform: isMobilePreviewHovered ? "scale(1.16)" : "scale(1)",
            }}
          />
        </div>

        <div className="min-w-0 gap-1 flex flex-1 flex-col">
          <div className="gap-2 flex items-start justify-between">
            <p className="font-bold leading-snug text-[15px] text-[#171717]">
              {material.title}
            </p>

            <PdfButton size="small" onClick={() => setIsPreviewOpen(true)} />
          </div>

          <p className="text-[12px] text-[#7A7A7A]">
            {material.author}, {material.year}
          </p>

          <p className="leading-snug line-clamp-2 text-[13px] text-[#444]">
            {material.description}
          </p>

          <div className="gap-1.5 mt-1 flex flex-wrap">
            {material.categories.map((cat) => (
              <CategoryBadge key={cat} label={cat} />
            ))}
          </div>
        </div>
      </div>

      <div className="md:grid hidden grid-cols-[60px_100px_1fr_1fr_160px_80px] items-center">
        <div className="px-4 py-5 text-blue-accent font-bold flex items-center justify-center text-[18px]">
          {material.id}
        </div>

        <div className="px-4 py-4 flex items-center justify-center">
          <div
            className="w-16 h-20 rounded-md relative overflow-hidden bg-[#E0E4F0]"
            onMouseEnter={(event: MouseEvent<HTMLDivElement>): void =>
              showPreviewHover("desktop", event)
            }
            onMouseLeave={() => setPreviewHoverState(null)}
            style={{
              ...previewWrapperBaseStyle,
              boxShadow: isDesktopPreviewHovered ? "0 12px 28px rgb(40 58 140 / 24%)" : "none",
              transform: isDesktopPreviewHovered ? "scale(1.06)" : "scale(1)",
            }}
          >
            <Image
              src={material.preview}
              alt={material.title}
              fill
              className="object-cover"
              style={{
                ...previewImageBaseStyle,
                transform: isDesktopPreviewHovered ? "scale(1.16)" : "scale(1)",
              }}
            />
          </div>
        </div>

        <div className="px-4 py-5 flex flex-col justify-center">
          <p className="font-bold leading-snug mb-1 text-[18px] text-[#171717]">
            {material.title}
          </p>
          <p className="text-[13px] text-[#7A7A7A]">
            {material.author}, {material.year}
          </p>
        </div>

        <div className="px-4 py-5 min-w-0 text-black leading-snug flex items-center text-[14px]">
          <p title={material.description} className="line-clamp-3 overflow-hidden break-words">
            {material.description}
          </p>
        </div>

        <div className="px-4 py-5 gap-1.5 flex flex-col items-center justify-center">
          {material.categories.map((cat) => (
            <CategoryBadge key={cat} label={cat} />
          ))}
        </div>

        <div className="px-4 py-5 flex items-center justify-center">
          <PdfButton size="large" onClick={() => setIsPreviewOpen(true)} />
        </div>
      </div>
      {isPreviewOpen && (
        <PdfPreviewModal material={material} onClose={() => setIsPreviewOpen(false)} />
      )}
      {previewHoverState !== null && (
        <PreviewHoverPortal material={material} hoverState={previewHoverState} />
      )}
    </div>
  );
};

export default MaterialItem;
