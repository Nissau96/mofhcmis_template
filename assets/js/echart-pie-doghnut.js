(function ($, echarts) {
    $(document).ready(function () {
        var chartElement = document.getElementById('basic-doughnut');
        if (!chartElement) {
            console.error('Chart container not found. Check your HTML.');
            return;
        }

        if (typeof echarts === 'undefined') {
            console.error('ECharts library not loaded');
            return;
        }

        try {
            var basicdoughnutChart = echarts.init(chartElement);

            var option = {
                title: {
                    text: 'Staff Demographics',
                    subtext: 'Gender',
                    x: 'center',
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}: {c} ({d}%)',
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    y: 'bottom',
                    data: ['Male', 'Female'],
                },
                color: ['#38649f', '#32cd32'],
                series: [
                    {
                        name: 'Gender',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        // center: ['50%', '57.5%'],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    formatter: '{c}',
                                    textStyle: {
                                        fontSize: '15',
                                        fontWeight: '500',
                                    },
                                },
                                labelLine: { show: false },
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    // formatter: '{c}' + '\n\n' + '({d}%)',
                                    position: 'center',
                                    textStyle: {
                                        fontSize: '15',
                                        fontWeight: '500',
                                    },
                                },
                            },
                        },
                        data: [
                            { value: 400, name: 'Male' },
                            { value: 303, name: 'Female' },
                        ],
                    },
                ],
            };

            basicdoughnutChart.setOption(option);

            $(window).on('resize', function () {
                basicdoughnutChart.resize();
            });
        } catch (error) {
            console.error('Error initializing chart:', error);
        }
    });
})(jQuery, echarts);

// Scheme of Service classification
(function ($, echarts) {
    $(document).ready(function () {
        var chartElement = document.getElementById('sos-class');
        if (!chartElement) {
            console.error('Chart container not found. Check your HTML.');
            return;
        }

        if (typeof echarts === 'undefined') {
            console.error('ECharts library not loaded');
            return;
        }

        try {
            var sosClassChart = echarts.init(chartElement);

            var option = {
                title: {
                    text: 'Staff Demographics',
                    subtext: 'Professional Class',
                    x: 'center',
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}: {c} ({d}%)',
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    y: 'bottom',
                    data: ['Professional', 'Sub-Professional'],
                },
                color: ['#38649f', '#32cd32'],
                series: [
                    {
                        name: 'Class',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        padAngle: 5,
                        // center: ['50%', '57.5%'],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    formatter: '{c}',
                                    textStyle: {
                                        fontSize: '14',
                                        fontWeight: '500',
                                    },
                                },
                                labelLine: { show: false },
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    // formatter: '{c}' + '\n\n' + '({d}%)',
                                    position: 'center',
                                    textStyle: {
                                        fontSize: '15',
                                        fontWeight: '500',
                                    },
                                },
                            },
                            borderRadius: 10,
                            // borderColor: '#fff',
                            // borderWidth: 2,
                        },
                        data: [
                            { value: 450, name: 'Professional' },
                            { value: 253, name: 'Sub-Professional' },
                        ],
                    },
                ],
            };

            sosClassChart.setOption(option);

            $(window).on('resize', function () {
                sosClassChart.resize();
            });
        } catch (error) {
            console.error('Error initializing chart:', error);
        }
    });
})(jQuery, echarts);


// Documentation Statistics
(function ($, echarts) {
    $(document).ready(function () {
        var chartElement = document.getElementById('document-stats');
        if (!chartElement) {
            console.error('Chart container not found. Check your HTML.');
            return;
        }

        if (typeof echarts === 'undefined') {
            console.error('ECharts library not loaded');
            return;
        }

        try {
            var docStatsChart = echarts.init(chartElement);

            var option = {
                title: {
                    text: 'Statistics',
                    subtext: 'Personal Files',
                    x: 'center',
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}: {c} ({d}%)',
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    y: 'bottom',
                    data: ['In-service', 'Entry'],
                },
                color: ['#38649f', '#32cd32'],
                series: [
                    {
                        name: 'Documentation',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        padAngle: 5,
                        // center: ['50%', '57.5%'],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    formatter: '{c}',
                                    textStyle: {
                                        fontSize: '14',
                                        fontWeight: '500',
                                    },
                                },
                                labelLine: { show: false },
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    // formatter: '{c}' + '\n\n' + '({d}%)',
                                    position: 'center',
                                    textStyle: {
                                        fontSize: '15',
                                        fontWeight: '500',
                                    },
                                },
                            },
                            borderRadius: 10,
                            // borderColor: '#fff',
                            // borderWidth: 2,
                        },
                        data: [
                            { value: 2, name: 'Entry' },
                            { value: 7, name: 'In-service' },
                        ],
                    },
                ],
            };

            docStatsChart.setOption(option);

            $(window).on('resize', function () {
                docStatsChart.resize();
            });
        } catch (error) {
            console.error('Error initializing chart:', error);
        }
    });
})(jQuery, echarts);


// Grade Analogous Class
// (function ($, echarts) {
//     $(document).ready(function () {
//         var chartElement = document.getElementById('grade-class');

//         if (!chartElement) {
//             console.error('Chart container not found. Check your HTML.');
//             return;
//         }

//         if (typeof echarts === 'undefined') {
//             console.error('ECharts library not loaded');
//             return;
//         }

//         try {
//             var gradeClassChart = echarts.init(chartElement);

//             var option = {
//                 title: {
//                     text: 'Staff Demographics',
//                     subtext: 'Grade Analogous Class',
//                     left: 'center'
//                 },
//                 tooltip: {
//                     trigger: 'item',
//                     formatter: '{a} <br/>{b}: {c} ({d}%)'
//                 },
//                 legend: {
//                     orient: 'vertical',
//                     x: 'right',
//                     y: 'bottom',
//                     data: ['Chief', 'Principal', 'Senior', 'Professional', 'Assistant', 'Sub-Professional']
//                 },
//                 color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272'],
//                 series: [{
//                     name: 'Employee Grade',
//                     type: 'pie',
//                     radius: ['65%', '70%'],
//                     itemStyle: {
//                         borderRadius: 10
//                     },
//                     label: {
//                         show: true,
//                         formatter: '{c}',
//                     },
//                     emphasis: {
//                         label: {
//                             show: true,
//                             fontSize: 16,
//                             fontWeight: 'bold'
//                         }
//                     },
//                     labelLine: {
//                         show: false
//                     },
//                     data: [
//                         { value: 75, name: 'Chief' },
//                         { value: 120, name: 'Principal' },
//                         { value: 190, name: 'Senior' },
//                         { value: 230, name: 'Professional' },
//                         { value: 65, name: 'Assistant' },
//                         { value: 253, name: 'Sub-Professional' }
//                     ]
//                 }]
//             };

//             gradeClassChart.setOption(option);

//             $(window).on('resize', function () {
//                 gradeClassChart.resize();
//             });
//         } catch (error) {
//             console.error('Error initializing chart:', error);
//         }
//     });
// })(jQuery, echarts);

(function ($, echarts) {
    $(document).ready(function () {
        var chartElement = document.getElementById('grade-class');

        if (!chartElement) {
            console.error('Chart container not found. Check your HTML.');
            return;
        }
        var barColor = "#2e5797";

        var data = [
            { grade: 'Chief', officers: 75 },
            { grade: 'Principal', officers: 120 },
            { grade: 'Senior', officers: 190 },
            { grade: 'Professional', officers: 230 },
            { grade: 'Assistant', officers: 65 },
            { grade: 'Sub-Professional', officers: 253 }
        ];

        // Sort the data alphabetically by division name
        data.sort(function (a, b) {
            return b.grade.localeCompare(a.grade);
        });

        // Extract sorted divisions and staff counts
        var grades = data.map(function (item) { return item.grade; });
        var officerCount = data.map(function (item) { return item.officers; });

        if (typeof echarts === 'undefined') {
            console.error('ECharts library not loaded');
            return;
        }

        try {
            var gradeClassChart = echarts.init(chartElement);

            var option = {
                title: {
                    text: 'Staff Demographics',
                    subtext: 'Grade Class',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                    formatter: function (params) {
                        return params[0].name + ': ' + params[0].value + ' staff members';
                    }
                },
                grid: {
                    left: '3%',
                    right: '10%',
                    bottom: '5%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    name: 'Staff Number',
                    nameLocation: 'middle', // Positions the name in the middle
                    nameGap: 22, // Gap between axis and name
                    nameTextStyle: {
                        fontSize: 12,
                        fontWeight: 'normal'
                    },
                    axisLabel: {
                        fontSize: 12
                    },
                    splitLine: {
                        show: false // Keep horizontal gridlines
                    }
                },
                yAxis: {
                    type: 'category',
                    data: grades,
                    axisTick: {
                        alignWithLabel: true
                    }
                },
                series: [
                    {
                        name: 'Staff Count',
                        type: 'bar',
                        barWidth: '50%', // Increased bar width from 60% to 70%
                        itemStyle: {
                            color: barColor // Single color for all bars
                        },
                        data: officerCount,
                        label: {
                            show: true,
                            position: 'right',
                            fontSize: 12,
                            color: '#333',
                            fontWeight: 'normal',
                            formatter: function (params) {
                                return params.value;
                            }
                        }
                    }
                ]
            };

            gradeClassChart.setOption(option);

            $(window).on('resize', function () {
                gradeClassChart.resize();
            });
        } catch (error) {
            console.error('Error initializing chart:', error);
        }
    });
})(jQuery, echarts);


// Ministry Workforce Chart
(function ($, echarts) {
    $(document).ready(function () {
        var chartElement = document.getElementById('workforce');

        if (!chartElement) {
            console.error('Chart container not found. Check your HTML.');
            return;
        }

        if (typeof echarts === 'undefined') {
            console.error('ECharts library not loaded');
            return;
        }

        try {
            var gradeClassChart = echarts.init(chartElement);

            var option = {
                title: {
                    text: 'Staff Demographics',
                    subtext: 'Personnel Classification',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    y: 'bottom',
                    data: ['Staff', 'Interns', 'NSP']
                },
                color: ['#2e5797', '#32cd32', '#fac858'],
                series: [{
                    name: 'Category',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    padAngle: 5,
                    itemStyle: {
                        borderRadius: 10
                    },
                    label: {
                        show: true,
                        formatter: '{c}',
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: '500'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 703, name: 'Staff' },
                        { value: 120, name: 'Interns' },
                        { value: 190, name: 'NSP' },

                    ]
                }]
            };

            gradeClassChart.setOption(option);

            $(window).on('resize', function () {
                gradeClassChart.resize();
            });
        } catch (error) {
            console.error('Error initializing chart:', error);
        }
    });
})(jQuery, echarts);