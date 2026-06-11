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
    <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-blue-accent font-title font-bold text-[32px] sm:text-[40px] lg:text-[48px] uppercase mb-8">
        {'Публічна інформація'}
      </h1>

      <div className="flex flex-col gap-4 text-[16px] sm:text-[17px] text-[#171717] font-body leading-relaxed">
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

        <ol className="flex flex-col gap-1 list-none">
          <li>{'1. Ім\'я та прізвище особи, що робить запит, поштова адреса чи адреса електронної пошти, номер телефону;'}</li>
          <li>{'2. Опис інформації, яку бажано отримати (вид, назва, реквізити чи зміст документу, відносно якого зроблено запит);'}</li>
          <li>{'3. Підпис та дату.'}</li>
        </ol>

        <div className="flex flex-col gap-1">
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

        <p className="font-semibold text-[17px] sm:text-[18px] mt-2">
          {'Доступ до публічної інформації'}
        </p>

        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-indigo-800 underline underline-offset-2 hover:text-blue-accent transition-colors w-fit"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}