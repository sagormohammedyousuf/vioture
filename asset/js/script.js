$(document).ready(function () {
    // "All Status" button functionality
    $(".all-car-list-btn").click(function () {
        $(".new-car-list, .used-car-list").addClass("d-none"); // Hide new and used car lists
        $(".all-car-list").removeClass("d-none").addClass("d-flex"); // Show all car list
        $(".filter-btn-active").removeClass("filter-btn-active"); // Remove active state from other buttons
        $(this).addClass("filter-btn-active"); // Add active state to this button
    });

    // "New Cars" button functionality
    $(".new-list-car-btn").click(function () {
        $(".new-car-list").removeClass("d-none").addClass("d-flex"); // Show new car list
        $(".used-car-list, .all-car-list").addClass("d-none"); // Hide used and all car lists
        $(".filter-btn-active").removeClass("filter-btn-active"); // Remove active state from other buttons
        $(this).addClass("filter-btn-active"); // Add active state to this button
    });

    // "Used Cars" button functionality
    $(".used-car-list-btn").click(function () {
        $(".used-car-list").removeClass("d-none").addClass("d-flex"); // Show used car list
        $(".new-car-list, .all-car-list").addClass("d-none"); // Hide new and all car lists
        $(".filter-btn-active").removeClass("filter-btn-active"); // Remove active state from other buttons
        $(this).addClass("filter-btn-active"); // Add active state to this button
    });



    ////////////  count animation ///////////////////
    
    const duration = 2000; // Duration of animation in milliseconds

    function startCounter($counter) {
        const target = +$counter.data('target');

        const updateCount = () => {
            const current = +$counter.text();
            const increment = target / (duration / 20); // Adjusts the speed

            if (current < target) {
                $counter.text(Math.ceil(current + increment));
                setTimeout(updateCount, 20); // Update every 20ms
            } else {
                $counter.text(target); // Ensure it ends at target value
            }
        };

        updateCount();
    }

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).find('.stat-number').each(function () {
                    startCounter($(this));
                });
                observer.unobserve(entry.target); // Stop observing once animation has started
            }
        });
    }, { threshold: 0.5 }); // Adjust threshold if needed

    // Observe the section containing the counters
    observer.observe(document.querySelector('.stats'));


});
