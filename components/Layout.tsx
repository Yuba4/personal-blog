import Head from "next/head";

function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <div>
        <header>
          <div> My blog </div>
          <nav>blog</nav>
          <main>{children}</main>
          <footer>All content ©</footer>
        </header>
      </div>
    </>
  );
}

export default Layout;
