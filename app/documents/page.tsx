const DOCUMENTS = [
  { label: 'Положення (установчі документи)', href: 'https://fsx1.itstep.org/api/v1/files/8gGj5inXMIqkYahdRuweFfNw5sl96dSh?inline=true' },
  { label: 'Освітньо - професійна програма 122 "Комп\'ютерні науки"', href: 'https://fsx1.itstep.org/api/v1/files/SfWXfi92nDSGyKIWWvPxtKLfB2MKRIuy' },
  { label: 'Проект Освітньо - професійна програма F3 "Комп\'ютерні науки" 2025р.', href: 'https://fsx3.itstep.org/api/v1/files/bY8BoxM4kNABOY38j0RrhpKxFzrIjm8M' },
  { label: 'Освітньо - професійна програма F3 "Комп\'ютерні науки" 2025р.', href: 'https://fsx3.itstep.org/api/v1/files/1ZUxgm8K5RP3PvIGFxvGTBqzxv07zApp' },
  { label: 'Навчальний план підготовки фахового молодшого бакалавра 2025-2026 н.р.', href: 'https://fsx3.itstep.org/api/v1/files/E8sK7MS0nb8tjU_8Xag8Akz_8tGzR4iN' },
  { label: 'Рецензія Анатолій Філь, начальник управління протидії кіберзлочинам в Одеській області Департаменту кіберполіції (міжрегіональний територіальний орган) Національної поліції України, підполковник поліції', href: 'https://fsx1.itstep.org/api/v1/files/GhOjKqXOyVqUtSW6rKblgBhO9PnZVvlI?inline=true' },
  { label: 'Рецензія К.В. Колесніков, доктор технічних наук, професор, проректор з науково-дослідної діяльності АТ «Міжнародний університет інформаційних технологій» (м.Алмати, Казахстан)', href: 'https://fsx1.itstep.org/api/v1/files/v3Tj2X5s_5kDHRBF6bbYqaohtaivClZT?inline=true' },
  { label: 'Концепція освітньої діяльності з підготовки фахових молодших бакалаврів за спеціальністю 122 «Комп\'ютерні науки»', href: 'https://fsx1.itstep.org/api/v1/files/QO6NuyJ-tao2LI2P1M55X6CgMTSF5TQm?inline=true' },
  { label: 'Положення про внутрішню систему забезпечення якості освіти в фаховому коледжі «IT STEP»', href: 'https://fsx1.itstep.org/api/v1/files/whHWvj0e-1Al8nPEnocpOBIuQSMJ4dfS' },
  { label: 'Положення про організацію освітнього процесу в відокремленому підрозділі «Фаховий коледж «IT СТЕП»» ПЗВО «Одеський технологічний університет «ШАГ»» (нова редакція)', href: 'https://fsx1.itstep.org/api/v1/files/whHWvj0e-1Al8nPEnocpOBIuQSMJ4dfS' },
  { label: 'Положення про організацію освітнього процесу в відокремленому підрозділі «Фаховий коледж «IT СТЕП»» ПЗВО «Одеський технологічний університет «ШАГ»» (нова редакція) (проект)', href: 'https://fsx3.itstep.org/api/v1/files/dAjslqJ-xxrqO16o7RaDzHwDcbKO7vTn' },
  { label: 'Критерії оцінювання результатів навчання', href: 'https://fsx1.itstep.org/api/v1/files/Eoit8fI9ceSwks6WnWrSkQdQ9tFF-sby' },
  { label: 'Положення про академічну доброчесність', href: 'https://fsx1.itstep.org/api/v1/files/BKlT2nRCm4RJgYFnlsaFMsikf-VoAWWr' },
  { label: 'Структура та органи управління закладу освіти', href: 'https://fsx1.itstep.org/api/v1/files/OQKxeS3KfDSMJLEAkESVmV0uvtYEFANa?inline=true' },
  { label: 'Положення про Педагогічну раду в Фаховому коледжі «IT STEP»', href: 'https://fsx1.itstep.org/api/v1/files/556lFNhXIlQAO0IsxiGhMf4b4cOL0t34' },
  { label: 'Положення про силабус навчальної дисципліни', href: 'https://fsx1.itstep.org/api/v1/files/o_l4KuDtKCrB2-hXsrnPYelv5w2TveG5' },
  { label: 'Положення про робочу програму навчальної дисципліни', href: 'https://fsx1.itstep.org/api/v1/files/XtnTG1EUdNxYpoLMOE86Vi8ZvP7UE6Bq' },
  { label: 'Положення про атестацію педагогічних працівників в Фаховому коледжі «IT STEP»', href: 'https://fsx3.itstep.org/api/v1/files/GH1rNpp5riiZEJDA2tr_MxHskJreh2OM' },
  { label: 'Положення про контроль результатів навчання в Фаховому коледжі «IT STEP»', href: 'https://fsx1.itstep.org/api/v1/files/EasLWWBwcW44vIu6eBmmxbVzOY3ED1RU' },
  { label: 'Положення про контроль результатів навчання в Фаховому коледжі «IT STEP» (нова редакція)', href: 'https://fsx3.itstep.org/api/v1/files/Bq-2IR_vg3hlqChNGOTBo3z65hrpDZGL' },
  { label: 'Положення про індивідуальний навчальний план здобувача освіти', href: 'https://fsx3.itstep.org/api/v1/files/kU25OnPym_ps7m58QNVGKHCtCCypQjgW' },
  { label: 'Положення про академічну мобільність здобувачів фахової передвищої освіти, педагогічних, адміністративних працівників в Фаховому коледжі «IT STEP»', href: 'https://fsx1.itstep.org/api/v1/files/sQLS-7Iuaoe6CmBr2wvJPvcBgScHu94N' },
  { label: 'Положення про визнання результатів попереднього навчання в Фаховому коледжі «IT STEP»', href: 'https://fsx1.itstep.org/api/v1/files/XnKtgjsas8KCJSfcc9KJYwFpJ9GJTQa5' },
  { label: 'Положення про порядок відрахування, переривання навчання, поновлення і переведення здобувачів освіти, а також надання їм академічної відпустки в Фаховому коледжі «IT STEP»', href: 'https://fsx3.itstep.org/api/v1/files/u3nQounDSOlDFU4IIr2tdE4ao92STZdt' },
  { label: 'Положення про порядок відрахування, переривання навчання, поновлення і переведення здобувачів освіти, а також надання їм академічної відпустки в Фаховому коледжі «IT STEP» (Нова редакція)', href: 'https://fsx3.itstep.org/api/v1/files/YbFQm0ovoBYd_le70tT78se1yCsi-U7E' },
  { label: 'Умови доступності закладу освіти для навчання осіб з особливими освітніми потребами', href: 'https://fsx1.itstep.org/api/v1/files/HFu217pIfgGs1R0lsVbOiCLI3Pq81RO6?inline=true' },
  { label: 'План заходів, спрямованих на запобігання та протидію булінгу (цькуванню) в закладі освіти', href: 'https://fsx1.itstep.org/api/v1/files/QvDSllO6jFZd9tC8XQ1FcT6iyQPfwuY9?inline=true' },
  { label: 'Порядок подання та розгляду (з дотриманням конфіденційності) заяв про випадки булінгу (цькування) в закладі освіти', href: 'https://fsx1.itstep.org/api/v1/files/QerbM2lUKuAZSVZhIWzxjSL3aL610Dqv?inline=true' },
  { label: 'Порядок реагування на доведені випадки булінгу (цькування) в закладі освіти та відповідальність осіб, причетних до булінгу (цькування)', href: 'https://fsx1.itstep.org/api/v1/files/_46xUyvHSw-pXhR53zZ5QldjDbxdyA9i?inline=true' },
  { label: 'Положення про запобігання, попередження та врегулювання випадків, пов\'язаних з дискримінацією, сексуальним домаганням, булінгом і корупцією в Фаховому коледжі «IT STEP»', href: 'https://fsx3.itstep.org/api/v1/files/VQkIZczBdPjfPliTxn4heWHZHVpls99I' },
  { label: 'Положення про врегулювання конфліктних ситуацій', href: 'https://fsx3.itstep.org/api/v1/files/VQkIZczBdPjfPliTxn4heWHZHVpls99I' },
  { label: 'Матеріально-технічне забезпечення закладу освіти (згідно з ліцензійними умовами)', href: 'https://fsx1.itstep.org/api/v1/files/gpITZEO3QE8XPZovzqa4D9bHAiG83eUU?inline=true' },
  { label: 'Кадровий склад закладу освіти згідно з ліцензійними умовами', href: 'https://fsx1.itstep.org/api/v1/files/ihGPYQz7Fpso00qsr_C3pzUc6qsW8hda?inline=true' },
  { label: 'Інформація про ліцензований обсяг закладу фахової передвищої освіти за кожною спеціальністю', href: 'https://odesa-college.itstep.org/licenzia' },
  { label: 'Положення про студентське самоврядування фаховому коледжі «IT STEP»', href: 'https://fsx3.itstep.org/api/v1/files/rDdHw1ZRrjHu-GDRwQ4gamOJaCU2ePT4' },
  { label: 'Положення про доступ осіб з інвалідністю', href: 'https://fsx1.itstep.org/api/v1/files/L27fpfzEBX1jDN4yXNxPRH73o3LJKZ3a' },
  { label: 'Положення про службу охорони праці в Фаховому коледжі «IT STEP»', href: '#' },
  { label: 'ПРАВИЛА внутрішнього розпорядку для здобувача освіти Фахового коледжу «IT СТЕП» ПЗВО Одеський технологічний університет «ШАГ»»', href: 'https://fsx1.itstep.org/api/v1/files/3eXu3-Z2vBuwnF8gmyA0NFUDAQbk7c-O' },
  { label: 'Положення про Детекцин', href: 'https://fsx3.itstep.org/api/v1/files/wZQAqeCB6E1GsCQvbnUUCGiRdCUPlIav' },
  { label: 'Положення організацію та правила дистанційної форми навчання в «Фаховому коледжі «IT СТЕП» ПЗВО «Одеського технологічного університету «ШАГ»»', href: 'https://fsx3.itstep.org/api/v1/files/c5IJq-SoJ0X-bQUo-WRLR97AkwwrUIuZ' },
  { label: 'Положення про змішане навчання в «Фаховому коледжі «IT СТЕП» ПЗВО «Одеський технологічний університет «ШАГ»»', href: 'https://fsx3.itstep.org/api/v1/files/r4azbffPOrGM2q-b3b2OO7hyiW2n57Ad' },
  { label: 'Положення про навчально-методичний кабінет Відокремленого структурного підрозділу Фахового коледжу «IT СТЕП» ПЗВО «Одеський технологічний університет «ШАГ»»', href: 'https://fsx3.itstep.org/api/v1/files/yHN4irTJTCze7DYduoguNqiW9hsuEJq0' },
];

export default function DocumentsPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10 mx-auto w-full max-w-[1320px]">
      <h1 className="text-blue-accent font-title font-bold sm:text-[40px] lg:text-[48px] mb-8 text-[32px] uppercase">
        Нормативні документи
      </h1>

      <div className="gap-4 flex flex-col">
        {DOCUMENTS.map((doc) => (
          <a
            key={doc.label}
            href={doc.href}
            className="text-indigo-800 sm:text-[18px] font-body hover:text-blue-accent leading-snug w-fit text-[18px] underline underline-offset-2 transition-colors"
          >
            {doc.label}
          </a>
        ))}
      </div>
    </div>
  );
}