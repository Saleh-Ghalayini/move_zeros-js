function move_zeros(numbers) {
   
    let zeros_counter = 0

    let zeros_moved_numbers = []

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == 0) {
            zeros_counter += 1
        }
        else {
            zeros_moved_numbers.push(numbers[i])
        }
        
    }

    for (let i = 0; i < zeros_counter; i++) {
        zeros_moved_numbers.push(0)
    }
    console.log(zeros_moved_numbers)
}

numbers_list = [0,1,2,3,0,5,0,0,2]
move_zeros(numbers_list)

    