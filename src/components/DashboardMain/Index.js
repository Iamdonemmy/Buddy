import styles from "./Dashboardmain.module.scss";
import circles from "../../assets/circle_layer.svg";
import add_account from "../../assets/add_account.svg";
import growth from "../../assets/growth.svg";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";
import avatarpotential from "../../assets/avatar_potential.svg";
import chartup from "../../assets/chartup.svg";
import MyResponsiveBar from "./Barchart";

const DashboardMain = () => {
  return (
    <div className={styles.dashboardmain}>
      <div className={styles.stats}>
        <div className={`${styles.stat} ${styles.stat_one}`}>
          <div className={styles.stat_text}>
            <h2>51</h2>
            <p>Total Channels</p>
          </div>
          <img src={circles} alt="" />
        </div>
        <div className={`${styles.stat} ${styles.stat_two}`}>
          <div className={styles.stat_text}>
            <h2>125</h2>
            <p>New Members</p>
          </div>
          <img src={add_account} alt="" />
        </div>
        <div className={`${styles.stat} ${styles.stat_three}`}>
          <div className={styles.stat_text}>
            <h2>789</h2>
            <p>All Impressions</p>
          </div>
          <img src={growth} alt="" />
        </div>
      </div>
      <div className={styles.dashboardmain__overview}>
        <div className={styles.heading}>
          <h2>Overview</h2>
          <div className={styles.heading__categories}>
            <div className={styles.heading__category}>
              <p>Robbin Hood</p>
            </div>
            <div className={styles.heading__category}>
              <p>Amreitrade</p>
            </div>
            <div className={styles.heading__category}>
              <p>Fidelity</p>
            </div>
            <div className={styles.heading__category}>
              <p>Charles</p>
            </div>
          </div>
        </div>
        <div className={styles.chart}>
          <MyResponsiveBar />
        </div>
      </div>
      <div className={styles.dashboardmain__trending}>
        <h2>Trending Posts</h2>
        <div className={styles.post_cards}>
          <div className={styles.post_card}>
            <h3>8 Upcoming Influencer Marketing Trends and Benefits</h3>
            <p>
              Marketing is evolving. It's changing from a one-way street to a
              two-way conversa…
            </p>
            <div className={styles.reactions}>
              <div className={styles.reactions__love}>
                <AiFillHeart />
                <p>260</p>
              </div>
              <div className={styles.reactions__love}>
                <BiCommentDetail />
                <p>234</p>
              </div>
              <div className={styles.reactions__love}>
                <IoMdShareAlt />
                <p>123</p>
              </div>
            </div>
          </div>
          <div className={styles.post_card}>
            <h3>How Influencer Marketing Affects Consumer Buying Behavior</h3>
            <p>
              As influencer marketing continues to grow, consumers have been
              turning to their…
            </p>
            <div className={styles.reactions}>
              <div className={styles.reactions__love}>
                <AiFillHeart />
                <p>260</p>
              </div>
              <div className={styles.reactions__love}>
                <BiCommentDetail />
                <p>234</p>
              </div>
              <div className={styles.reactions__love}>
                <IoMdShareAlt />
                <p>123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dashboardmain__members}>
        <h2>Potential Members</h2>
        <div className={styles.membercards}>
          <div className={styles.membercard}>
            <img src={avatarpotential} alt="Wanda Parker" />
            <h3>Wanda Parker</h3>
            <p>@ashking1234</p>
            <div className={styles.membercard__chart}>
              <img src={chartup} alt="" />
              <h4>10.3%</h4>
            </div>
          </div>
          <div className={styles.membercard}>
            <img src={avatarpotential} alt="Wanda Parker" />
            <h3>Wanda Parker</h3>
            <p>@ashking1234</p>
            <div className={styles.membercard__chart}>
              <img src={chartup} alt="" />
              <h4>10.3%</h4>
            </div>
          </div>
          <div className={styles.membercard}>
            <img src={avatarpotential} alt="Wanda Parker" />
            <h3>Wanda Parker</h3>
            <p>@ashking1234</p>
            <div className={styles.membercard__chart}>
              <img src={chartup} alt="" />
              <h4>10.3%</h4>
            </div>
          </div>
          <div className={styles.membercard}>
            <img src={avatarpotential} alt="Wanda Parker" />
            <h3>Wanda Parker</h3>
            <p>@ashking1234</p>
            <div className={styles.membercard__chart}>
              <img src={chartup} alt="" />
              <h4>10.3%</h4>
            </div>
          </div>
          <div className={styles.membercard}>
            <img src={avatarpotential} alt="Wanda Parker" />
            <h3>Wanda Parker</h3>
            <p>@ashking1234</p>
            <div className={styles.membercard__chart}>
              <img src={chartup} alt="" />
              <h4>10.3%</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
