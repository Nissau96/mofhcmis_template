$(function () {
    // ========================================================================= //
    //    Add remove class active has menu
    // ========================================================================= //

    jQuery('.has-submenu').click(function () {
        $('.has-submenu').removeClass('active');
        $(this).toggleClass('active');
    });

    // ========================================================================= //
    //    Toggle Aside Menu
    // ========================================================================= //

    jQuery('.hamburger').click(function () {
        jQuery('body').toggleClass('sidebar-toggled');
        jQuery('#main-wrapper').toggleClass('menu-toggle');
        jQuery('.left-panel').toggleClass('collapsed');
    });

    // ========================================================================= //
    //    Set attibute isnide body (Light)
    // ========================================================================= //

    jQuery('body').attr({
        'data-typography': 'rubik',
        //'data-sidebar-style': "full",
        'data-sidebar-position': 'fixed',
        'data-header-position': 'fixed',
        // 'data-nav-headerbg': 'primary_color_1',
        // 'data-headerbg': 'primary_color_1',
        // 'data-primary': 'primary_color_1',
        //'data-sibebartext': 'primary_color_2',
        //'data-sibebarbg': 'primary_color_2',
        // 'data-theme-version': 'light',
        // 'data-header-logo': "fixed",
        //'data-layout': 'vertical',
        // 'data-topbar': 'light',
        // 'data-sidebar': "light",
        //'data-container': "boxed",
        // 'layout-positions': "full",
    });

    // ========================================================================= //
    //    Set attibute isnide body (Dark)
    // ========================================================================= //

    if (jQuery('body').hasClass('dark')) {
        jQuery('body').attr('data-theme-version', 'dark');
        jQuery('body').attr('data-nav-headerbg', 'primary_color_3');
        jQuery('body').attr('data-headerbg', 'primary_color_3');
        jQuery('body').attr('data-sibebarbg', 'primary_color_3');
        jQuery('body').attr('data-primary', 'primary_color_3');
        jQuery('body').attr('data-sibebartext', 'primary_color_3');
        jQuery('body').attr('data-topbar', 'dark');
        jQuery('body').attr('data-sidebar', 'dark');
        jQuery('.brand-title').attr('src', 'assets/images/logo-dark.png');
    }

    // ========================================================================= //
    //   Top bar change
    // ========================================================================= //

    if ($('.auth').hasClass('dark')) {
        $('.logo img').attr('src', 'assets/images/logo-dark.png');
    }

    // ========================================================================= //
    //    resize
    // ========================================================================= //

    function resize() {
        if (window.matchMedia('(max-width: 767px)').matches) {
            $('body').attr('data-sidebar-style', 'overlay');
        } else if (window.matchMedia('(max-width: 1199px)').matches) {
            $('body').attr('data-sidebar-style', 'mini');
        } else {
            // $('body').attr('data-sidebar-style', 'full');
            // $("#main-wrapper").removeClass('mini');
        }
    }

    resize();

    jQuery(window).resize(function () {
        resize();
    });
});

// ========================================================================= //
//    upload image in drag
// ========================================================================= //

function showPreview(event) {
    if (event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById('file-ip-1-preview');
        preview.src = src;
        preview.style.display = 'block';
    }
}

// ========================================================================= //
//   Preview Pictures
// ========================================================================= //

$(".widget-3 input[type='file']").on('change', function () {
    $('.widget-3').addClass('custom-text');
});

// ========================================================================= //
//   Date Range
// ========================================================================= //

$('input[name="daterange"]').daterangepicker(
    {
        opens: 'right',
    },
    function (start, end, label) {
        console.log('A new date selection was made: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    }
);

// ========================================================================= //
//   Button Add Drugs
// ========================================================================= //
$('#butonAddDrug').click(function () {
    var structure = `   
        <form id="testmed">
            <div class="row">
                <div class="col-md-2">
                    <div class="form-group"><input type="text" class="form-control" placeholder="Type"></div>
                </div>
                <div class="col-md-6"> 
                <div class="form-group">
                <select class="form-control form-select"> <option value="">Select Drug...</option> <option value="19">csdfsff</option><option value="20">test trade name</option> </select> 
                
                </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group"> <input type="text" class="form-control" placeholder="Mg/Ml"></div>
                </div>
                <div class="col-md-6">
                    <div class="form-group"> <input type="text" class="form-control" placeholder="Dose"> </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group"> <input type="text" class="form-control" placeholder="Duration"> </div>
                </div>
                <div class="col-md-12">
                    <div class="form-group"> <input type="text" class="form-control" placeholder="Advice/Comment"></div>
                </div>
            </div>
        </form>
        <hr/>`;
    $('.drugslist').append(structure);
    // $('select').selectpicker();
});

// ========================================================================= //
//  Button Add Test
// ========================================================================= //

$('#butonAddTest').click(function () {
    var structure = `<form>
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <select class="form-control form-select">
                    <option>Select Test...</option>
                    <option>Scanner thoracique</option>
                    <option>Covid 19</option>
                    <option>dsdsfd</option>
                    <option>wqd</option>
                    <option>asdfsf</option>
                    <option>fgg</option>
                    <option>uohl</option>
                    <option>Pueba wilson</option>
                    <option>jjjhj</option>
                    <option>hh</option>
                    <option>Badanie Oberon</option>
                    <option>sdsadsa</option>
                    <option>test</option>
                </select>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Description">
            </div>
        </div>
    </div>
    <hr/>
</form>`;
    $('.addTest').append(structure);
    // $('select').selectpicker();
});

// ========================================================================= //
//  Change dates patient
// ========================================================================= //

$(function () {
    $('input[name="dates"]').daterangepicker(
        {
            singleDatePicker: true,
            showDropdowns: true,
            minYear: 1901,
            maxYear: parseInt(moment().format('YYYY'), 10),
        },
        function (start, end, label) {
            var years = moment().diff(start, 'years');
        }
    );
});

// ========================================================================= //
//   refrech select picker inside modal
// ========================================================================= //
$('.selectRefresh').on('shown', function () {
    $('.selectpicker').selectpicker('refresh');
});

// ========================================================================= //
//   Responsive
// ========================================================================= //

function resize() {
    if (window.matchMedia('(max-width: 1199px)').matches) {
        $('.has-submenu').removeClass('active');
    }
}

resize();

jQuery(window).resize(function () {
    resize();
});

jQuery(function ($) {
    var path = window.location.href;
    $('ul li a').each(function () {
        if (window.matchMedia('(max-width: 1199px) and (max-width: 1199px)').matches) {
            if (this.href === path) {
                if ($(this).parent().hasClass('has-submenu')) {
                    $(this).parent().addClass('active-submenu');
                } else {
                    $(this).parent().parent().parent().addClass('active-submenu');
                }
            }
        }
    });
});

// Code for Printing out the Current year in the footer
// Get the current year
const currentYear = new Date().getFullYear();

// Insert the current year into the HTML element with the ID "currentYear"
document.getElementById('currentYear').textContent = currentYear;

// Display Current Greeting
// Function to get the current time in Accra (GMT+0)
function getGreeting() {
    const now = new Date();
    const hour = now.getUTCHours(); // Use UTC hours for Accra timezone (GMT+0)

    let greeting;
    if (hour >= 5 && hour < 12) {
        greeting = 'Good Morning';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }

    return greeting;
}

// Update the greeting in the HTML
document.getElementById('greeting').textContent = getGreeting();

// Greeting Script
document.addEventListener('DOMContentLoaded', function () {
    function updateTimeBasedContent() {
        // Get current hour in Accra (GMT+0)
        const accraTime = new Date().toLocaleString('en-US', { timeZone: 'Africa/Accra' });
        const hour = new Date(accraTime).getHours();

        const welcomeCard = document.querySelector('.welcome-card');
        const greetingElement = document.getElementById('greeting');
        const timeIcon = document.getElementById('timeIcon');
        const timeImage = document.getElementById('timeImage');

        let content = {
            greeting: '',
            iconName: '',
            image: '',
            theme: '',
        };

        if (hour >= 0 && hour < 12) {
            content = {
                greeting: 'Good Morning',
                iconName: 'sunrise',
                image: 'assets/images/morning.png',
                theme: 'theme-morning',
            };
        } else if (hour >= 12 && hour < 17) {
            content = {
                greeting: 'Good Afternoon',
                iconName: 'sun',
                image: 'assets/images/afternoon.png',
                theme: 'theme-afternoon',
            };
        } else if (hour >= 17 && hour < 20) {
            content = {
                greeting: 'Good Evening',
                iconName: 'sunset',
                image: 'assets/images/evening.png',
                theme: 'theme-evening',
            };
        } else {
            content = {
                greeting: 'Good Night',
                iconName: 'moon',
                image: 'assets/images/night.png',
                theme: 'theme-night',
            };
        }

        // Update content
        greetingElement.textContent = content.greeting;
        timeImage.src = content.image;

        // Update theme
        welcomeCard.className = 'card welcome-card ' + content.theme;

        // Update icon
        timeIcon.innerHTML = '';
        const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        iconSvg.setAttribute('width', '24');
        iconSvg.setAttribute('height', '24');
        iconSvg.setAttribute('viewBox', '0 0 24 24');
        iconSvg.setAttribute('fill', 'none');
        iconSvg.setAttribute('stroke', 'currentColor');
        iconSvg.setAttribute('stroke-width', '2');
        iconSvg.setAttribute('stroke-linecap', 'round');
        iconSvg.setAttribute('stroke-linejoin', 'round');

        // Set the icon path based on the time of day
        let iconPath = '';
        switch (content.iconName) {
            case 'sunrise':
                iconPath = 'M17 18a5 5 0 0 0-10 0 M12 2v7 M4.22 10.22l1.42 1.42 M1 18h2 M21 18h2 M18.36 11.64l1.42-1.42 M23 22H1 M8 6l4-4 4 4';
                break;
            case 'sun':
                iconPath = 'M12 1v2 M12 21v2 M4.22 4.22l1.42 1.42 M18.36 18.36l1.42 1.42 M1 12h2 M21 12h2 M4.22 19.78l1.42-1.42 M18.36 5.64l1.42-1.42 M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z';
                break;
            case 'sunset':
                iconPath = 'M17 18a5 5 0 0 0-10 0 M12 9V2 M4.22 10.22l1.42 1.42 M1 18h2 M21 18h2 M18.36 11.64l1.42-1.42 M23 22H1 M16 5l-4 4-4-4';
                break;
            case 'moon':
                iconPath = 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z';
                break;
        }

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', iconPath);
        iconSvg.appendChild(path);
        timeIcon.appendChild(iconSvg);
    }

    // Initial update
    updateTimeBasedContent();

    // Update every minute
    setInterval(updateTimeBasedContent, 60000);
});

// Weather Script
// First, you'll need to get an API key from OpenWeatherMap
const API_KEY = '0f178cf559fad5c51b5e08b1ef7aa89d';
const CITY = 'Accra';
const COUNTRY = 'Ghana';

function updateWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const temperature = Math.round(data.main.temp);
            const weatherIcon = getWeatherIcon(data.weather[0].main);

            document.querySelector('.weather-info').innerHTML = `
                <div class="d-flex">
                    <div>
                        <h2 class="mb-0 font-weight-normal">
                            <i data-feather="${weatherIcon}" class="mr-2"></i>${temperature}&deg;C
                        </h2>
                    </div>
                    <div class="ml-2">
                        <h4 class="location font-weight-normal">${CITY}</h4>
                        <h6 class="font-weight-normal">${COUNTRY}</h6>
                    </div>
                </div>
            `;

            // This line is important - it renders the Feather icons
            feather.replace();
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.querySelector('.weather-info').innerHTML = `
                <div class="d-flex">
                    <div>
                        <h2 class="mb-0 font-weight-normal">
                            <i data-feather="alert-circle" class="mr-2"></i>Error loading weather data
                        </h2>
                    </div>
                </div>
            `;
            feather.replace();
        });
}

function getWeatherIcon(weatherCondition) {
    // Map weather conditions to appropriate icons
    const iconMap = {
        Clear: 'sun',
        Clouds: 'cloud',
        Rain: 'cloud-rain',
        Thunderstorm: 'cloud-lightning',
        Snow: 'cloud-snow',
        Mist: 'cloud-drizzle',
        Haze: 'cloud-drizzle',
        Fog: 'cloud-drizzle',
    };

    return iconMap[weatherCondition] || 'sun';
}

// Update weather immediately and then every 30 minutes
updateWeather();
setInterval(updateWeather, 30 * 60 * 1000);

// Getting current time via JS
function getAccraTime() {
    // Create a date object with the Accra timezone
    const accraTime = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Africa/Accra',
        hour12: true, // Use 12-hour format
        hour: 'numeric',
        minute: 'numeric',
    });

    return accraTime;
}

// To update time every second
function updateAccraTime() {
    const time = getAccraTime();
    // Assuming you have an element to display the time
    // Replace 'timeDisplay' with your actual element ID
    document.getElementById('timeDisplay').textContent = time;
}

// Initial call to display time immediately
updateAccraTime();

// Update time every second (1000 milliseconds)
setInterval(updateAccraTime, 1000);

// Featured Calendar 4
/*const daysTag = document.querySelector(".days"),
    currentDate = document.querySelector(".current-date"),
    prevNextIcon = document.querySelectorAll(".cal-icons span");
// getting new date, current year and month
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();
// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";
    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
            && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
}
renderCalendar();
prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if (currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});*/

// Condition Script for Form Fields
// Wait for DOM to be fully loaded
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const maritalStatus = document.getElementById('marital_status');
    const spouseDetails = document.getElementById('spouse_details');

    if (maritalStatus && spouseDetails) {
        maritalStatus.addEventListener('change', function () {
            const isMarried = this.value === 'Married';

            // Show or hide the spouse details section
            spouseDetails.style.display = isMarried ? 'block' : 'none';

            // Toggle required attributes for spouse fields
            ['spouseName', 'spouse_date_of_birth', 'spouse_contact'].forEach(id => {
                const field = document.getElementById(id);
                if (field) {
                    field.required = isMarried;
                }
            });
        });
    }

    // Ensure the form exists before adding event listener
    const familyInfoForm = document.getElementById('familyInfo');
    if (familyInfoForm) {
        familyInfoForm.addEventListener('submit', function (e) {
            e.preventDefault();
            console.log('Form submitted');
            // Handle form submission
        });
    }
});
// Condition Script for Form Fields

// Scripts for Doughnut charts
Highcharts.chart('container', {
    chart: {
        type: 'pie',
        custom: {},
        events: {
            render() {
                const chart = this,
                    series = chart.series[0];
                let customLabel = chart.options.chart.custom.label;

                if (!customLabel) {
                    customLabel = chart.options.chart.custom.label = chart.renderer
                        .label('<strong>Gender</strong>')
                        .css({
                            color: '#000',
                            textAnchor: 'middle',
                        })
                        .add();
                }

                const x = series.center[0] + chart.plotLeft,
                    y = series.center[1] + chart.plotTop - customLabel.attr('height') / 2;

                customLabel.attr({
                    x,
                    y,
                });
                // Set font size based on chart diameter
                customLabel.css({
                    fontSize: `${series.center[2] / 12}px`,
                });
            },
        },
    },

    title: {
        text: 'Company Gender Disparity',
    },
    legend: {
        enabled: true,
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            borderRadius: 8,
            dataLabels: [
                {
                    enabled: true,
                    distance: 20,
                    format: '{point.name}',
                },
                {
                    enabled: true,
                    distance: -15,
                    format: '{point.percentage:.0f}%',
                    style: {
                        fontSize: '0.9em',
                    },
                },
            ],
            showInLegend: true,
        },
    },
    series: [
        {
            name: 'Gender',
            colorByPoint: true,
            innerSize: '75%',
            data: [
                {
                    name: 'Male',
                    y: 450,
                    color: '#3498db', // Blue color for males
                },
                {
                    name: 'Female',
                    y: 253,
                    color: '#e74c3c', // Red color for females
                },
            ],
        },
    ],
});
// Scripts for Doughnut charts
