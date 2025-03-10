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
                    formatter: '{a} <br/>{b}: {c} ({d}%)',
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
                        radius: ['50%', '70%'],
                        center: ['50%', '57.5%'],
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
                    subtext: 'Scheme of Service Class',
                    x: 'center',
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)',
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
                        center: ['50%', '57.5%'],
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2,
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

