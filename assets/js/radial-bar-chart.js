$(document).ready(function () {
    // Verify the chart container exists
    var chartElement = document.getElementById('division-chart');
    if (!chartElement) {
        console.error('Chart container not found. Check your HTML.');
        return;
    }

    // Division data and corresponding staff counts
    var data = [
        { division: 'BD', staff: 93 },
        { division: 'CFD', staff: 8 },
        { division: 'ERMERD', staff: 63 },
        { division: 'ESRD', staff: 37 },
        { division: 'FSD', staff: 27 },
        { division: 'HCGAD', staff: 251 },
        { division: 'IAD', staff: 16 },
        { division: 'LD', staff: 12 },
        { division: 'PCMED', staff: 26 },
        { division: 'PD', staff: 11 },
        { division: 'PIAD', staff: 47 },
        { division: 'RPD', staff: 45 },
        { division: 'TDMD', staff: 38 },
    ];

    // Sort the data alphabetically by division name
    data.sort(function (a, b) {
        return b.division.localeCompare(a.division);
    });

    // Extract sorted divisions and staff counts
    var divisions = data.map(function (item) {
        return item.division;
    });
    var staffData = data.map(function (item) {
        return item.staff;
    });

    // Single color for all bars
    var barColor = '#2e5797';

    // Initialize ECharts instance
    var chart = echarts.init(chartElement);

    try {
        var gradeClassChart = echarts.init(chartElement);
        // Configure chart options
        var option = {
            title: {
                text: 'Staff Strength',
                subtext: 'By Division',
                left: 'center',
                // textStyle: {
                //     fontSize: 18,
                //     fontWeight: 600
                // },
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                },
                formatter: function (params) {
                    return params[0].name + ': ' + params[0].value + ' staff members';
                },
            },
            grid: {
                left: '3%',
                right: '10%',
                bottom: '5%',
                containLabel: true,
            },
            xAxis: {
                type: 'value',
                name: 'Staff Number',
                nameLocation: 'middle', // Positions the name in the middle
                nameGap: 22, // Gap between axis and name
                nameTextStyle: {
                    fontSize: 12,
                    fontWeight: 'normal',
                },
                axisLabel: {
                    fontSize: 12,
                },
                splitLine: {
                    show: false, // Keep horizontal gridlines
                },
            },
            yAxis: {
                type: 'category',
                data: divisions,
                // axisLabel: {
                //     fontSize: 12
                // },
                axisTick: {
                    alignWithLabel: true,
                },
                splitLine: {
                    show: true, // Remove vertical gridlines
                },
            },
            series: [
                {
                    name: 'Staff Count',
                    type: 'bar',
                    barWidth: '70%', // Increased bar width from 60% to 70%
                    itemStyle: {
                        color: barColor, // Single color for all bars
                    },
                    data: staffData,
                    label: {
                        show: true,
                        position: 'right',
                        fontSize: 12,
                        color: '#333',
                        fontWeight: 'normal',
                        formatter: function (params) {
                            return params.value;
                        },
                    },
                },
            ],
        };

        // Apply options to the chart
        chart.setOption(option);

        // Handle window resize
        $(window).on('resize', function () {
            chart.resize();
        });
    } catch (error) {
        console.error('Error initializing chart:', error);
    }
});
