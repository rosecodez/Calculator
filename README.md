# Calculator The Odin Project ~ Rosecodez 2023

This project was a great way of learning to work with numbers. I had to convert strings ,for the first time, to numbers using `Number()` to work properly.

~Difficulties encountered

    Initially I have used the `id`` attribute for getting the `value`, but with this project I had difficulty making them work in the `event listeners` for the `buttons`. I tried to switch between `id` or `class` to make the functions work, but it wasn't the great solution since i thought it will give me some trouble in the future, so I have been asking around if it was a good idea. Thanks to one of Odin's community mentors, MaoShizhong, I have learned that I should use the `value attribute` for all the `buttons`. It made everything work smoother. The `buttons `responded and worked well with the `value attribute`.

    The biggest difficulty I had encountered was the logic to show up the correct `result`. For this was necessary to take the `operation`, make it into an `array`, add space between each `operator`, `split the `array` and then finally use segments of it with `index`` to get the `numbers`` to use in the `operate` function. (phew). That was hard, but Odin community helped me again and advised me that for some reason Javascript arrays need to have space between them in order to be separated.

~Bugs: 
✔️The calculator should not evaluate more than a single pair of numbers at a time. The calculator should evaulate first pair, get `result`, `display` it and finally use the `result` as the first number in the new calculation, along with the new `operator`
-You should round answers with long decimals so that they don’t overflow the screen.
-Pressing `=` before entering all of the numbers or an `operator` could cause problems!.
✔️Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”
✔️Display a snarky `error message` if the user tries to `divide` by 0… and don’t let it crash your calculator!
-Add a `. button` and let users `input` decimals! Make sure you don’t let them type more than one though: 12.3.56.5. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)
✔️Add a “backspace” button, so the user can undo if they click the wrong number.
