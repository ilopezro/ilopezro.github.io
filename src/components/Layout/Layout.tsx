import { Fragment, FunctionComponent, PropsWithChildren } from "react";
import { Footer, Header } from "..";

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <Fragment>
    <Header />
    <main>{children}</main>
    <Footer />
  </Fragment>
);

export default Layout;
