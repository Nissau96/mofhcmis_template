$(document).ready(function () {
    // Verify the chart container exists
    var chartElement = document.getElementById('division-chart');
    if (!chartElement) {
        console.error('Chart container not found. Check your HTML.');
        return;
    }

    // Division data (sorted alphabetically)
    var divisions = [
        'BD',
        'CFD',
        'ESRD',
        'ERMERD',
        'FSD',
        'HCGAD',
        'IAD',
        'LD',
        'PCMED',
        'PD',
        'PIAD',
        'RPD',
        'TDMD'
    ];

    // Sample staff data - replace with actual numbers
    var staffData = [93, 8, 37, 63, 27, 251, 16, 12, 26, 11, 47, 45, 38];

    // Create the chart options
    var options = {
        series: [{
            name: 'Staff Count',
            data: staffData
        }],
        chart: {
            type: 'bar',
            height: 400,
            width: '100%',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '70%',
                distributed: true,
                dataLabels: {
                    position: 'bottom'
                }
            }
        },
        dataLabels: {
            enabled: false,
            textAnchor: 'end',
            position: 'top',
            style: {
                colors: ['#333']
            },
            formatter: function (val, opt) {
                return val;
            },
            offsetX: 60
        },
        colors: [
            '#38649f', '#ee1044', '#389f99', '#8a2be2', '#ff7f50',
            '#32cd32', '#ffd700', '#ff4500', '#9370db', '#20b2aa',
            '#ff6347', '#4169e1', '#ff8c00'
        ],
        xaxis: {
            categories: divisions,
            labels: {
                style: {
                    fontSize: '12px'
                }
            }
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: '12px'
                }
            }
        },
        title: {
            text: 'Staff Strength by Division',
            align: 'center',
            style: {
                fontSize: '18px'
            }
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " staff members";
                }
            }
        },
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
            floating: false,
            fontSize: '12px',
            offsetY: 10,
            markers: {
                width: 12,
                height: 12,
                radius: 6
            },
            itemMargin: {
                horizontal: 10,
                vertical: 5
            }
        }
    };

    // Initialize ApexCharts
    var chart = new ApexCharts(chartElement, options);

    // Render the chart
    chart.render();

    // Handle window resize
    $(window).on('resize', function () {
        chart.updateOptions({
            chart: {
                width: '100%'
            }
        });
    });
});