(function ($, echarts) {
    $(document).ready(function () {
        var chartElement = document.getElementById('modal-document-stats');
        if (!chartElement) {
            console.error('Chart container not found. Check your HTML.');
            return;
        }

        if (typeof echarts === 'undefined') {
            console.error('ECharts library not loaded');
            return;
        }

        try {
            var modalDocStatsChart = echarts.init(chartElement);

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

            modalDocStatsChart.setOption(option);

            $(window).on('resize', function () {
                modalDocStatsChart.resize();
            });
        } catch (error) {
            console.error('Error initializing chart:', error);
        }
    });
})(jQuery, echarts);