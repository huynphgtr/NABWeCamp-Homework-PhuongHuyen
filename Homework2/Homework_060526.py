def find_max(arr):
    max = arr[0]
    for i in range (1, len(arr)): 
        if arr[i] > max: 
            max = arr[i]
    return max

def binary_search(arr, targer): 
    left, right = 0, len(arr) -1
    while left <= right: 
        mid = (left+right) // 2 
        if arr[mid] == targer: 
            return mid 
        elif arr[mid] < targer: 
            left = mid + 1 
        else: 
            right = mid - 1
    return -1

def bubble_sort(arr): 
    length = len(arr)
    while True: 
        swapped = False 
        for i in range (0, length-1): 
            if arr[i] > arr[i+1]: 
                arr[i], arr[i+1] = arr[i+1], arr[i]
                swapped = True 
        if not swapped: 
            break
    return arr

def enter_input(): 
    raw_arr = input("Enter numbers separated by space: ")
    arr = list(map(int, raw_arr.split()))
    return arr

def main(): 
    print("---Menus---"
          "\n1. Find Max"
          "\n2. Binary Search"
          "\n3. Bubble Sort"
          "\n4. Exit")
    while True: 
        choice = int(input("Enter your choice: "))
        if choice == 1:
            arr = enter_input()
            print("Max value in array: ", find_max(arr))
        elif choice == 2:
            raw_arr = input("Enter sorted numbers separated by space: ")
            arr = list(map(int, raw_arr.split()))     
            target = int(input("Enter target value for binary search: "))            
            index = binary_search(arr, target)
            if index != -1:
                print(f"Target {target} found at index: {index}")
            else: 
                print (f"Target {target} not found in array")
        elif choice == 3: 
            arr = enter_input()
            print("Sorted arr1: ", bubble_sort(arr))
        elif choice == 4:
            print("Exiting...")
            break

if __name__ == "__main__": 
    main()



