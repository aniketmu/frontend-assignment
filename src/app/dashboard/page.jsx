'use client'
import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { useSession } from 'next-auth/react';
import { useState } from "react";
import Modal from "./Modal";
import styles from "./Dashboard.module.css";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );

function Dashboard() {
  const session = useSession();
  console.log(session)
    const [dataset1, setDataset1] = useState([]);
    const [dataset2, setDataset2] = useState([]);
    const [dataset3, setdataset3] = useState([])
  
    useEffect(() => {
      (async () => {
        const response = await fetch('https://v6.exchangerate-api.com/v6/673556165b5588b1512ff070/latest/USD');
        const data = await response.json();
        setDataset1([data.conversion_rates.COP, data.conversion_rates.IRR, data.conversion_rates.BIF, data.conversion_rates.LBP]);
        setDataset2([data.conversion_rates.CDF, data.conversion_rates.MNT, data.conversion_rates.KRW, data.conversion_rates.SLL]);
        setdataset3([data.conversion_rates.PYG, data.conversion_rates.SLL, data.conversion_rates.SYP])
        console.log(data);
      })();
    }, []);
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
      
    };
    
    const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];
    
    // Replace this data with your own arrays
    const dataset1Data = [400, 350, 200, 300, 500, 120, 400];
    const dataset2Data = [300, 500, 250, 200, 400, 300, 400];
    
    const data = {
      labels,
      datasets: [
        {
          label: "Guest",
          data: dataset1,
          backgroundColor: "#98D89E",
        },
        {
          label: "User",
          data: dataset2,
          backgroundColor: "#EE8484",
        },
      ],
    };
    
     const pieData = {
      labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
      datasets: [
        {
          label: "My First Dataset",
          data: dataset3,
          borderJoinStyle: "round",
          backgroundColor: ["#98D89E", "#EE8484", "#F6DC7D"],
          borderWidth: 0,
          hoverOffset: 4,
        },
      ],
      options: {
        plugins: {
          legend: {
            position: "right",
            rtl: true,
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
              padding: 20,
            },
          },
        },
      },
    };
    
    const [user, setUser] = useState({
    })
    const [addProfile, setAddProfile] = useState(false);
    return (
      <div className={styles.dashboard}>
        <div className={styles.navigation}>
          <div className={styles.leftSide}></div>
          <div className={styles.help}>Help</div>
          <div className={styles.contactUs}>Contact Us</div>
          <div className={styles.settings}>Settings</div>
          <div className={styles.users}>Users</div>
          <div className={styles.schedules}>Schedules</div>
          <div className={styles.transactions}>Transactions</div>
          <b className={styles.dashboard1}>Dashboard</b>
          <img
            className={styles.transactionIcon}
            alt=""
            src="/transaction-icon.svg"
          />
          <img className={styles.scheduleIcon} alt="" src="/schedule-icon.svg" />
          <img
            className={styles.dashboardIcon}
            alt=""
            src="/dashboard-icon.svg"
          />
          <img className={styles.settingIcon} alt="" src="/setting-icon.svg" />
          <img className={styles.userIcon} alt="" src="/user-icon.svg" />
          <b className={styles.board} style={{color: 'white'}}>Board.</b>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.totalRevenuesParent}>
            <div className={styles.totalRevenues}>
              <div className={styles.card}>
                <div className={styles.card1}></div>
              </div>
              <div className={styles.totalRevenuesChild}></div>
            </div>
            <div className={styles.frameChild}></div>
            <img className={styles.vectorIcon} alt="" src="/revenue.svg" />
          </div>
          <div className={styles.totalRevenuesParent}>
            <div className={styles.totalRevenues}>
              <div className={styles.card}>
                <div className={styles.card1}></div>
              </div>
              <div className={styles.totalRevenuesChild}></div>
            </div>
            <div className={styles.frameItem}></div>
            <img
              className={styles.vectorIcon1}
              alt=""
              src="/transaction-icon.svg"
            />
            <div className={styles.frameGroup}>
              <div className={styles.totalTransactionsParent}>
                <div className={styles.totalTransactions}>Total Transactions</div>
                <b className={styles.b}>1,520</b>
              </div>
              <div className={styles.label}>
                <div className={styles.labelText}>+1.7%</div>
              </div>
            </div>
          </div>
          <div className={styles.totalRevenuesParent}>
            <div className={styles.totalRevenues}>
              <div className={styles.card}>
                <div className={styles.card1}></div>
              </div>
              <div className={styles.totalRevenuesChild}></div>
            </div>
            <div className={styles.frameInner}></div>
            <div className={styles.frameContainer}>
              <div className={styles.totalTransactionsParent}>
                <div className={styles.totalTransactions}>Total Likes</div>
                <b className={styles.b1}>9,721</b>
              </div>
              <div className={styles.label}>
                <div className={styles.labelText1}>+1.4%</div>
              </div>
            </div>
            <img className={styles.vectorIcon2} alt="" src="/likes.svg" />
          </div>
          <div className={styles.totalRevenuesParent}>
            <div className={styles.totalRevenues}>
              <div className={styles.card}>
                <div className={styles.card1}></div>
              </div>
              <div className={styles.totalRevenuesChild}></div>
            </div>
            <div className={styles.ellipseDiv}></div>
            <div className={styles.frameContainer}>
              <div className={styles.totalTransactionsParent}>
                <div className={styles.totalTransactions}>Total Users</div>
                <b className={styles.b1}>9,721</b>
              </div>
              <div className={styles.label}>
                <div className={styles.labelText1}>+4.2%</div>
              </div>
            </div>
            <img className={styles.vectorIcon3} alt="" src="/users-icon.svg" />
          </div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.totalTransactionsParent}>
            <div className={styles.totalTransactions}>Total Revenues</div>
            <b className={styles.b}>$2,129,430</b>
          </div>
          <div className={styles.label}>
            <div className={styles.labelText1}>+2.5%</div>
          </div>
        </div>
        <div className={styles.header}>
          <b className={styles.dashboard2}>Dashboard</b>
          <div className={styles.searchBar}>
            <input className={styles.white} type="text" />
            <div className={styles.search}>Search...</div>
            <img className={styles.searchIcon} alt="" src="/search-icon.svg" />
          </div>{session && session.data && session.data.user && (
          <img className={styles.maskGroupIcon} alt="" src={session.data.user.image} />
          )}
          <img className={styles.vectorIcon5} alt="" src="/notification.svg" />
        </div>
        <div className={styles.activitiesCard}>
          <div className={styles.card8}>
            <div className={styles.card9}>
              <div className="chart-title">
                <h1>Activities</h1>
                <p>May-June 21</p>
              </div>
              <Bar options={options} data={data} />
            </div>
          </div>
        </div>
        <div className={styles.topProductsCard}>
          <div className={styles.card10}>
            <div className={styles.card11}>
              <Doughnut data={pieData} />
            </div>
          </div>
        </div>
        <div className={styles.card12}>
          <div className={styles.card11} />
           {!user.name && <div className={styles.groupParent}> 
             <img
              className={styles.groupIcon}
              alt=""
              src="/group-7558.svg"
              onClick={() => {setAddProfile(true)}}
            />
            <div className={styles.addProfile}>Add Profile</div> 
            
          </div> }
        </div>
        {addProfile && <Modal setAddProfile={setAddProfile} setUser={setUser}/>}
  
        {user.name && <>
        <div className={styles.dashboardInner}>
          <div className={styles.johnDoeWrapper}>
            <div className={styles.johnDoe}>{user.name}</div>
          </div>
        </div>
              
        <div className={styles.buttonParent}>
          <img className={styles.buttonIcon} alt="" src="/phoneIcon.svg" />
          <div className={styles.johnxyzcom}>{user.phone}</div>
        </div>
        <div className={styles.buttonGroup}>
          <img className={styles.buttonIcon} alt="" src="/emailIcon.svg" />
          <div className={styles.johnxyzcom}>{user.email}</div>
        </div>
        <div className={styles.buttonContainer}>
          <img className={styles.buttonIcon2} alt="" src="/ytIcon.svg" />
          <div className={styles.johnxyzcom}>{user.youtube_username}</div>
        </div>
        <div className={styles.buttonParent1}>
          <img className={styles.buttonIcon} alt="" src="/instaIcon.svg" />
          <div className={styles.johnxyzcom}>{user.instagram_username}</div>
        </div>
        
        </>
        }
            
      </div>
    );
  }
  
  export default Dashboard;