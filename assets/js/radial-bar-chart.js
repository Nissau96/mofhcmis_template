$(document).ready(function () {
    // Verify the chart container exists
    var chartElement = document.getElementById('division-chart');
    if (!chartElement) {
        console.error('Chart container not found. Check your HTML.');
        return;
    }

    // Division data (sorted alphabetically)
    var divisions = ['BD', 'CFD', 'ESRD', 'ERMERD', 'FSD', 'HCGAD', 'IAD', 'LD', 'PCMED', 'PD', 'PIAD', 'RPD', 'TDMD'];

    // Sample staff data - replace with actual numbers
    var staffData = [93, 8, 37, 63, 27, 251, 16, 12, 26, 11, 47, 45, 38];

    // Create the chart options
    var options = {
        series: [
            {
                name: 'Staff Count',
                data: staffData,
            },
        ],
        chart: {
            type: 'bar',
            height: 420,
            width: '100%',
            toolbar: {
                show: false,
            },
            fontFamily: 'Rubik, sans-serif',
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '60%',
                distributed: false,
                dataLabels: {
                    position: 'right',
                },
            },
        },
        dataLabels: {
            enabled: true,
            textAnchor: 'start',
            position: 'right',
            offsetX: 50,
            style: {
                fontSize: '12px',
                colors: ['#333'],
                fontWeight: 'normal',
            },
            background: {
                enabled: false,
            },
            formatter: function (val) {
                return val;
            },
        },
        colors: ['#38649f', '#ee1044', '#389f99', '#8a2be2', '#ff7f50', '#32cd32', '#ffd700', '#ff4500', '#9370db', '#20b2aa', '#ff6347', '#4169e1', '#ff8c00'],
        xaxis: {
            categories: divisions,
            labels: {
                style: {
                    fontSize: '12px',
                },
            },
            title: {
                text: 'Staff Strength',
                style: {
                    fontSize: '12px',
                    fontWeight: 'normal',
                },
            },
            // max: function () {
            //     // Find the maximum value and add some padding for labels
            //     return Math.max(staffData) * 1.15;
            // },
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: '12px',
                },
            },
            title: {
                text: 'Division',
                style: {
                    fontSize: '12px',
                    fontWeight: 'normal',
                },
            },
        },
        title: {
            text: 'Staff Strength',
            align: 'center',
            style: {
                fontSize: '18px',
                fontWeight: '600',
            },
        },
        subtitle: {
            text: 'By Division',
            align: 'center',
            style: {
                fontSize: '14px',
                fontWeight: 'normal',
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + ' staff members';
                },
            },
        },
        legend: {
            show: false,
            // position: 'bottom',
            // horizontalAlign: 'center',
            // floating: false,
            // fontSize: '12px',
            // offsetY: 10,
            // markers: {
            //     width: 12,
            //     height: 12,
            //     radius: 6,
            // },
            // itemMargin: {
            //     horizontal: 10,
            //     vertical: 5,
            // },
        },
        grid: {
            xaxis: {
                lines: {
                    show: false, // No grid lines in the image
                },
            },
            yaxis: {
                lines: {
                    show: false, // No grid lines in the image
                },
            },
        },
    };

    // Initialize ApexCharts
    var chart = new ApexCharts(chartElement, options);

    // Render the chart
    chart.render();

    // Handle window resize
    $(window).on('resize', function () {
        chart.updateOptions({
            chart: {
                width: '100%',
            },
        });
    });
});
