def main():
    # Take user input
    user_input = input("Enter some text: ")

    # Open or create a text file in write mode
    file_name = "user_text.txt"
    with open(file_name, 'w') as file:
        # Write user input to the file
        file.write(user_input)

    print(f"Text has been written to {file_name}")

if __name__ == "__main__":
    main()
