# Calculator The Odin Project ~ Rosecodez 2023

This project was a great way of learning to work with numbers. I had to convert strings to numbers using `Number()``
~Difficulties encountered

    Initially I have used the `id`` attribute for getting the `value`, but with this project I had difficulty making them work in the `event listeners` for the `buttons`. I tried to switch between `id` or `class` to make the functions work, but it wasn't the great solution since i thought it will give me some trouble in the future, so I have been asking around if it was a good idea. Thanks to one of Odin's community mentors, MaoShizhong, I have learned that I should use the `value attribute` for all the `buttons`. It made everything work smoother. The `buttons `responded and worked well with the `value attribute`.

    The biggest difficulty I had encountered was the logic to show up the correct `result`. For this was necessary to take the `operation`, make it into an `array`, add space between each `operator`, `split the `array` and then finally use segments of it with `index`` to get the `numbers`` to use in the `operate` function. (phew). That was hard, but Odin community helped me again and advised me that for some reason Javascript arrays need to have space between them in order to be separated.