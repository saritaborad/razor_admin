import UserLayout from "../components/UserLayout";
import React from "react";
// // import Eye from "../images/eye.svg";
// import { DateRangePicker } from 'react-date-range';
// import DateRangeFilter from "../components/DateRangeFilter";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";


export default function Desktop(params) {
    const openUserinfo = () => {
        document.getElementById("date_range_cont").classList.toggle("active");
    };
    const onChange = (ranges) => {
        // ranges ...
        console.log(ranges);
    };

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: "selection",
        },
    ]);

// ============================================ chart-1 pie chart      ============================================================
const options = {
    chart: {
        type: 'pie'
    },
    title: {
        text: ''
    },
    legend: {
        enabled:true,
        itemMarginBottom:5,
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: false
            },
            showInLegend: true
          },	
    },

    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Rezar',
            y: 61.41,
            color:'#2D9DFA',
        }, {
            name: 'Rosario',
            y: 11.84,
            color:'#F96277',
        }, {
            name: 'Novena',
            y: 10.85,
            color:'#6079FF',
        }, {
            name:'Misa',
            y: 4.67,
            color:'#FFBA30',
        }, ]
    }]
    
        
    };
// ============================================ chart-2 flag chart       =========================================================

    const data = {
        2016: [
            ["Germany", 2],
            ["Russia", 4],
            ["China", 5],
            ["Great Britain", 8],
            ["United States", 9],
        ],
    };

    const countries = [
        {
            name: "Germany",
            flag: "de",
        },
        {
            name: "Russia",
            flag: "ru",
        },
        {
            name: "China",
            flag: "cz",
        },
        {
            name: "Great Britain",
            flag: "gb",
        },
        {
            name: "United States",
            flag: "us",
        },
    ];

    const getData = (data) =>
        data.map((country, i) => ({
            name: country[0],
            y: country[1],
            color: countries[i].color,
        }));

    const columnoptions = {
        chart: {
            type: "bar",
            inverted: true,
        },
        title: {
            text: "",
        },

        plotOptions: {
            series: {
                grouping: true,
                borderWidth: 0,
                stacking: "normal",
                colors: ["#2f7ed8", "#F4A60B", "#EA2843", "#1A68F4"],
            },
        },
        legend: {
            enabled: true,
            layout: "vertical",
            verticalAlign: "top",
            align: "right",
            itemMarginBottom:15,
        },
        tooltip: {
            shared: true,
        },
        
        xAxis: {
            type: "category",
            lineColor:'transparent',
            lineWidth: 0,
            tickLength: 0,
            accessibility: {
                description: "Countries",
            },
            max: 4,
            labels: {
                useHTML: true,
                animate: true,
                formatter: (ctx) => {
                    let flag;

                    countries.forEach(function (country) {
                        if (country.name === ctx.value) {
                            flag = country.flag;
                        }
                    });

                    return `${flag.toUpperCase()}<br><span class="f32">
                  <span class="flag ${flag}"></span>
                </span>`;
                },
                style: {
                    textAlign: "center",
                },
            },
        },
        yAxis: {
            
                title: {
                    text: "",
                },
                showFirstLabel: false,
                labels: {
                    enabled: false,
                },

                gridLineColor:'transparent',
                gridLineWidth: 0,
            
    },
        series: [
            {
                name: "1.25 mill",
                id: "main",
                color: "  #2D9DFA",
                data: getData(data[2016]).slice(),
            },
            {
                name: "900 mil",
                data: [5, 3, 4, 7, 2],
                color: " #F96277",
            },
            {
                name: "253 mil",
                data: [2, 2, 3, 2, 1],
                color: " #FFBA30 ",
            },
            {
                name: "220 mil",
                data: [3, 4, 4, 2, 5],
                color: "#6079FF",
            },
        ],
        exporting: {
            allowHTML: true,
        },
    };

// ============================================ chart-3 bar chart date-month      =========================================================

    const publicacionescolumn={
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            tickWidth: 0,
            lineColor:'transparent',
              lineWidth: 0,
            labels: {
              style: {
                  color: 'hsla(0, 0%, 0%, 0.24)',
                 }
              },
              categories: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']
        },
        
        yAxis: {
            opposite:true,
            gridLineWidth: .5,
            gridLineColor: '#E5E5E5',
             title: {
                  text: '',
              },
              labels: {
                style: {
                    color: 'hsla(0, 0%, 0%, 0.24)',
                   }
                }
              },

        legend: {
            enabled: true,
            itemMarginBottom:5,
            
        },

        plotOptions: {
            column: {
                grouping: true,
                borderWidth: 0,
                stacking: "normal",
                colors: ["#2f7ed8", "#F4A60B", "#EA2843", "#1A68F4"],
            }
        },
        series: [{
            name: 'Publicaciones',
            data: [5, 3, 4, 7, 2],
            color:' #007AFF',
        },
         {
            name: 'Nuevos usuarios',
            data: [2, 2, 3, 2, 1],
            color:' #B3D7FF',
        },],
        exporting: {
            allowHTML: true,
        },
      }

// ============================================ chart-4 bar chart date-month      =========================================================
    const daycolumn={
    chart: {
        type: 'column',
        backgroundColor: '#fff'
    },
    title: {
        text: 'Weekly Revenue',
        style: {  
          color: '#fff'
        }
    },
    xAxis: {
        tickWidth: 0,
        lineColor:'transparent',
          lineWidth: 0,
        labels: {
          style: {
              color: 'hsla(0, 0%, 0%, 0.24)',
             }
          },
        categories: ['May 1', '', '', '', 'May 31']
    },
    yAxis: {
      opposite:true,
      gridLineWidth: .5,
      gridLineColor: '#E5E5E5',
       title: {
            text: '',
        },
        labels: {
          style: {
              color: 'hsla(0, 0%, 0%, 0.24)',
             }
          }
        },
    legend: {
        enabled: false,
    },
    credits: {
        enabled: false
    },

    plotOptions: {
          column: {
              borderRadius: 0,
        } 
        },
    series: [{
        name: '',
        data: [2200, 2800, 2300, 1700, 2000],
        color:'#F96277',
    }]
    }

    return (
        <>
            <UserLayout>
                <div className="content-main-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 mb-4">
                                <div className="custom-date-picker">
                                    <div className="cust-d-selector">
                                        <div className="selecotr-item">
                                            <input type="radio" id="radio1" name="selector" className="selector-item_radio" defaultChecked />
                                            <label htmlFor="radio1" className="selector-item_label">
                                                24h
                                            </label>
                                        </div>
                                        <div className="selecotr-item">
                                            <input type="radio" id="radio2" name="selector" className="selector-item_radio" />
                                            <label htmlFor="radio2" className="selector-item_label">
                                                7d
                                            </label>
                                        </div>
                                        <div className="selecotr-item">
                                            <input type="radio" id="radio3" name="selector" className="selector-item_radio" />
                                            <label htmlFor="radio3" className="selector-item_label">
                                                14d
                                            </label>
                                        </div>
                                        <div className="selecotr-item">
                                            <input type="radio" id="radio4" name="selector" className="selector-item_radio" />
                                            <label htmlFor="radio4" className="selector-item_label">
                                                30d
                                            </label>
                                        </div>
                                        <div className="selecotr-item">
                                            <input type="radio" id="radio5" name="selector" className="selector-item_radio" />
                                            <label htmlFor="radio5" className="selector-item_label">
                                                90d
                                            </label>
                                        </div>
                                        <div className="selecotr-item">
                                            <input type="radio" id="radio6" name="selector" className="selector-item_radio" />
                                            <label htmlFor="radio6" className="selector-item_label">
                                                180d
                                            </label>
                                        </div>
                                        <div className="selecotr-item">
                                            <input type="radio" id="radio7" name="selector" className="selector-item_radio" />
                                            <label htmlFor="radio7" className="selector-item_label">
                                                1año
                                            </label>
                                        </div>
                                        <span className="px-3 custom-date-text" onClick={openUserinfo}>
                                            Personalizado
                                        </span>
                                    </div>
                                </div>
                                <div className="date-range-cont" id="date_range_cont">
                                    <DateRange editableDateInputs={true} onChange={(item) => setState([item.selection])} moveRangeOnFirstSelection={false} ranges={state} />
                                    <div className="d-flex justify-content-center mb-4">
                                        <button className="btn-comn-class-pink-bdr">
                                            <bdi>Cancelar</bdi>
                                        </button>
                                        <button className="btn-comn-class ms-3"><bdi>Filtrar</bdi></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="main-bdr-box p-3 text-center">
                                    <p className="desc-text fw-6">Usuarios totales</p>
                                    <span className="d-t-heading-title">1.953.162</span>
                                    <span className="d-t-head-icon d-inline-block ms-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path
                                                d="M15 8C15 7.73479 14.8946 7.48043 14.7071 7.2929C14.5196 7.10536 14.2652 7 14 7L6 7C5.73478 7 5.48043 7.10536 5.29289 7.2929C5.10536 7.48043 5 7.73479 5 8C5 8.26522 5.10536 8.51957 5.29289 8.70711C5.48043 8.89465 5.73478 9 6 9L14 9C14.2652 9 14.5196 8.89465 14.7071 8.70711C14.8946 8.51957 15 8.26522 15 8ZM20 10C20 8.02219 19.4135 6.08879 18.3147 4.4443C17.2159 2.79981 15.6541 1.51809 13.8268 0.761209C11.9996 0.00433249 9.98891 -0.193701 8.0491 0.192151C6.10929 0.578003 4.32746 1.53041 2.92893 2.92894C1.53041 4.32746 0.577999 6.10929 0.192146 8.0491C-0.193707 9.98891 0.00432725 11.9996 0.761203 13.8268C1.51808 15.6541 2.79981 17.2159 4.4443 18.3147C6.08879 19.4135 8.02219 20 10 20C11.3132 20 12.6136 19.7413 13.8268 19.2388C15.0401 18.7363 16.1425 17.9997 17.0711 17.0711C17.9997 16.1425 18.7362 15.0401 19.2388 13.8268C19.7413 12.6136 20 11.3132 20 10ZM2 10C2 8.41775 2.46919 6.87103 3.34824 5.55544C4.22729 4.23985 5.47672 3.21447 6.93853 2.60897C8.40034 2.00347 10.0089 1.84504 11.5607 2.15372C13.1126 2.4624 14.538 3.22433 15.6569 4.34315C16.7757 5.46197 17.5376 6.88743 17.8463 8.43928C18.155 9.99113 17.9965 11.5997 17.391 13.0615C16.7855 14.5233 15.7602 15.7727 14.4446 16.6518C13.129 17.5308 11.5822 18 10 18C7.87827 18 5.84344 17.1571 4.34314 15.6569C2.84285 14.1566 2 12.1217 2 10ZM15 12C15 11.7348 14.8946 11.4804 14.7071 11.2929C14.5196 11.1054 14.2652 11 14 11L6 11C5.73478 11 5.48043 11.1054 5.29289 11.2929C5.10536 11.4804 5 11.7348 5 12C5 12.2652 5.10536 12.5196 5.29289 12.7071C5.48043 12.8946 5.73478 13 6 13L14 13C14.2652 13 14.5196 12.8946 14.7071 12.7071C14.8946 12.5196 15 12.2652 15 12Z"
                                                fill="#444552"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="main-bdr-box p-3 text-center">
                                    <p className="desc-text fw-6">Publicaciones hechas</p>
                                    <span className="d-t-heading-title">3.230.956</span>
                                    <span className="d-t-head-icon d-inline-block ms-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12.5 3C7.52944 3 3.5 7.02944 3.5 12C3.5 16.9706 7.52944 21 12.5 21C17.4706 21 21.5 16.9706 21.5 12C21.5 7.02944 17.4706 3 12.5 3ZM1.5 12C1.5 5.92487 6.42487 1 12.5 1C18.5751 1 23.5 5.92487 23.5 12C23.5 18.0751 18.5751 23 12.5 23C6.42487 23 1.5 18.0751 1.5 12Z"
                                                fill="#00CABA"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M11.7929 7.29289C12.1834 6.90237 12.8166 6.90237 13.2071 7.29289L17.2071 11.2929C17.5976 11.6834 17.5976 12.3166 17.2071 12.7071C16.8166 13.0976 16.1834 13.0976 15.7929 12.7071L12.5 9.41421L9.20711 12.7071C8.81658 13.0976 8.18342 13.0976 7.79289 12.7071C7.40237 12.3166 7.40237 11.6834 7.79289 11.2929L11.7929 7.29289Z"
                                                fill="#00CABA"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12.5 7C13.0523 7 13.5 7.44772 13.5 8V16C13.5 16.5523 13.0523 17 12.5 17C11.9477 17 11.5 16.5523 11.5 16V8C11.5 7.44772 11.9477 7 12.5 7Z"
                                                fill="#00CABA"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="main-bdr-box p-3 text-center">
                                    <p className="desc-text fw-6">Cantidad de comentarios</p>
                                    <span className="d-t-heading-title">495.631.759</span>
                                    <span className="d-t-head-icon d-inline-block ms-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12.5 3C7.52944 3 3.5 7.02944 3.5 12C3.5 16.9706 7.52944 21 12.5 21C17.4706 21 21.5 16.9706 21.5 12C21.5 7.02944 17.4706 3 12.5 3ZM1.5 12C1.5 5.92487 6.42487 1 12.5 1C18.5751 1 23.5 5.92487 23.5 12C23.5 18.0751 18.5751 23 12.5 23C6.42487 23 1.5 18.0751 1.5 12Z"
                                                fill="#00CABA"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M11.7929 7.29289C12.1834 6.90237 12.8166 6.90237 13.2071 7.29289L17.2071 11.2929C17.5976 11.6834 17.5976 12.3166 17.2071 12.7071C16.8166 13.0976 16.1834 13.0976 15.7929 12.7071L12.5 9.41421L9.20711 12.7071C8.81658 13.0976 8.18342 13.0976 7.79289 12.7071C7.40237 12.3166 7.40237 11.6834 7.79289 11.2929L11.7929 7.29289Z"
                                                fill="#00CABA"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12.5 7C13.0523 7 13.5 7.44772 13.5 8V16C13.5 16.5523 13.0523 17 12.5 17C11.9477 17 11.5 16.5523 11.5 16V8C11.5 7.44772 11.9477 7 12.5 7Z"
                                                fill="#00CABA"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="main-bdr-box p-3">
                                    <div className="main-top-hdr-inner">
                                        <span>Reacciones de post</span>
                                       
                                        <div>
                                            <HighchartsReact highcharts={Highcharts} options={options} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 mb-4">
                                <div className="main-bdr-box p-3">
                                    <div className="main-top-hdr-inner">
                                        <span>Interacciones </span>
                                    </div>
                                    <div className="flag-chart">
                                        <HighchartsReact highcharts={Highcharts} options={columnoptions} />
                                    </div>
                                    <div className="text-end desh-chart">
                                        <span>5 países donde más se utilizan las reacciones</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="main-bdr-box p-3">
                                    <div className="main-top-hdr-inner">
                                        <span>Usuarios logueados en los últimos 30 días</span>
                                    </div>
                                   
                                    <div>
                                    <HighchartsReact highcharts={Highcharts} options={daycolumn} />
                                    </div>
                                    <div className="desh-chart-3">
                                        <span className="d-block">Total de usuarios logueados</span>
                                        <p className="mt-2 mb-0 d-flex align-items-center">
                                            1.563
                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2">
                                                <path d="M4 6.66683V1.3335" stroke="#4AAF05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M2 3.3335L4 1.3335L6 3.3335" stroke="#4AAF05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <bdi>16,00%</bdi>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="main-bdr-box p-3">
                                    <div className="main-top-hdr-inner">
                                        <span>Nuevos usuarios x publicaciones</span>
                                    </div>
                                    <div className="mt-5">
                                        <HighchartsReact highcharts={Highcharts} options={publicacionescolumn} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UserLayout>
        </>
    );
}
