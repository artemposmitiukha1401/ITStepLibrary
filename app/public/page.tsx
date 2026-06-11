export default function PublicInfoPage() {
  const links = [
    {
      label: 'Положення про Відокремлений підрозділ «Фаховий коледж «IT СТЕП» Приватного закладу вищої освіти «Одеський технологічний університет «ШАГ»»',
      href: 'https://fsx1.itstep.org/api/v1/files/jSgzaiLqvIpsUv_fNnykK-SBYxPrKP6A?inline=true',
    },
    {
      label: 'Витяг з Єдиного державного реєстру юридичних осіб, фізичних осіб-підприємців та громадських формувань',
      href: 'https://fsx1.itstep.org/api/v1/files/eyifx0KydauP-NNqn70GLQ2NCYLgCd1y?inline=true',
    },
    {
      label: 'Вакантні посади',
      href: 'https://fsx1.itstep.org/api/v1/files/HpfP4_Mljh1XRvaRGexKXd-MCaYJvLk3?inline=true',
    },
    {
      label: 'Гуртожиток',
      href: 'https://fsx1.itstep.org/api/v1/files/XltAQlO7CzD51p1AsxyQJxc6JEAJDWmK?inline=true',
    },
    {
      label: 'Мова (мови) освітнього процесу',
      href: 'https://fsx1.itstep.org/api/v1/files/_kdozuc7CXEKlV79Tt5ACBcEh-gFmOR_?inline=true',
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10 mx-auto w-full max-w-330">
      <h1 className="text-blue-accent font-title font-bold sm:text-[40px] lg:text-[48px] mb-8 text-[32px] uppercase">
        {'Публічна інформація'}
      </h1>

      <div className="gap-4 sm:text-[17px] font-body leading-relaxed flex flex-col text-[16px] text-[#171717]">
        <p>
          {'Відокремлений підрозділ «Фаховий коледж «IT СТЕП»» ПЗВО «Одеський технологічний університет «ШАГ»» надає публічну інформацію керуючись Законом України «Про доступ до публічної інформації», Законом України «Про вищу освіту» та Указом Президента України «Питання забезпечення органами виконавчої влади доступу до публічної інформації».'}
        </p>

        <p>
          {'Запит на інформацію – це прохання особи до розпорядника інформації надати публічну інформацію, що знаходиться у його володінні.'}
        </p>

        <p>
          {'Надання публічної інформації Фаховий коледж «IT СТЕП» здійснює у відповідь на інформаційний запит. Запит на інформацію може бути індивідуальним або колективним.'}
        </p>

        <p>{'Запит від осіб на отримання інформації подається у довільній формі. При цьому обов\'язково необхідно вказати:'}</p>

        <ol className="gap-1 flex list-none flex-col">
          <li>{'1. Ім\'я та прізвище особи, що робить запит, поштова адреса чи адреса електронної пошти, номер телефону;'}</li>
          <li>{'2. Опис інформації, яку бажано отримати (вид, назва, реквізити чи зміст документу, відносно якого зроблено запит);'}</li>
          <li>{'3. Підпис та дату.'}</li>
        </ol>

        <div className="gap-1 flex flex-col">
          <p>{'Поштова адреса для надання інформаційного запиту:'}</p>
          <p>{'65023, м. Одеса, вул. Садова, 3, на конверті вказати «Публічна інформація»'}</p>
          <p>
            {'Електронна адреса для надання інформаційного запиту: '}
            <a
              href="mailto:koledzh_i@itstep.org"
              className="text-blue-accent hover:underline"
            >
              koledzh_i@itstep.org
            </a>
          </p>
        </div>

        <p className="font-semibold sm:text-[18px] mt-2 text-[17px]">
          {'Доступ до публічної інформації'}
        </p>

        <div className="gap-4 flex flex-col">
          {links.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-indigo-800 hover:text-blue-accent w-fit underline underline-offset-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}