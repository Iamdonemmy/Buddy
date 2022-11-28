import RightSideBar from "../components/RightSideBar/Index";
import styles from "./Styles/dashboard.module.scss";

const dashboard = () => {
  return (
   <div className={styles.dashboard}>
      <div className={styles.dashboard__main}>
        <div className={styles.main__top_nav}>{/* <DashboardTopNav /> */}</div>
        <div className={styles.main__content_area}>
          {/* <Main /> */}
          <RightSideBar />
        </div>
      </div>

    </div>
  );
};

export default dashboard;
