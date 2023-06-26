const questionsList = [
    {
        id: 1,
        ques: "What is the full form of RAM?",
        options: ["Random Access Memory", "Randomely Access Memory", "Run Aceapt Memory", "None of these"],
        correctAnswer: "Random Access Memory",
        point: 1
    }, {
        id: 2,
        ques: "Microsoft Word, Microsoft Excel and Microsoft PowerPoint are the part of",
        options: ["Microsoft Office", "Microsoft Windows", "Microsoft Access", "None of these"],
        correctAnswer: "Microsoft Office",
        point: 1
    }, {
        id: 3,
        ques: "The basic unit of a worksheet into which you enter data in excel is called a _______",
        options: ["Tab", "Cell", "Box", "None of these"],
        correctAnswer: "Cell",
        point: 1
    },
    {
        id: 4,
        ques: "What is the full form of CPU?",
        options: ["Central Program Unit", "Central Processing Unit", "Central Preload Unit", "None of these"],
        correctAnswer: "Central Processing Unit",
        point: 1
    }, {
        id: 5,
        ques: "We can detect spelling and grammar error by ",
        options: ["Press Shift + F7", "Press F7", "Press Ctrl + F7", "None of these"],
        correctAnswer: "Press F7",
        point: 1
    },
    {
        id: 6,
        ques: "What is the full form of HTML?",
        options: ["Hyper Text Markup Language", "Hyper Text Makeup Language", "Hyper Text Marking Language", "Hyper Text Marked Language"],
        correctAnswer: "Hyper Text Markup Language",
        point: 1
    },
    {
        id: 7,
        ques: "What is the package called which helps create, manipulate and analyse data arranged in rows and columns?",
        options: ["Application Package", "Word Processing Package", "Spreadsheet Package", "None of these"],
        correctAnswer: "Spreadsheet Package",
        point: 1

    }, {
        id: 8,
        ques: "Which of the following is not the basic function of the computer",
        options: ["Accept Input", "Process Data", "Store Data", "Copy Text"],
        correctAnswer: "Copy Text",
        point: 1
    },
    {
        id: 9,
        ques: "Which of the following is not an example of an Operating System?",
        options: ["Windows 98", "BSD Unix", "Microsoft Office XP", "Red Hat Linux"],
        correctAnswer: "Microsoft Office XP",
        point: 1
    },
    {
        id: 10,
        ques: "A word processor would be used best to _____.",
        options: ["Write a letter", "Draw a picture", "Take a picture", "Play games"],
        correctAnswer: "Write a letter",
        point: 1

    }, {
        id: 11,
        ques: "The basic architecture of computer was developed by ",
        options: ["John Van Neumann", "Charles Babbage", "Blaise Pascal", "Garden Moore"],
        correctAnswer: "John Van Neumann",
        point: 1

    },
    {
        id: 12,
        ques: "In which year was the first Apple computer released?",
        options: ["1976", "1980", "1985", "1990"],
        correctAnswer: "1976",
        point: 1

    },
    {
        id: 13,
        ques: "How many bytes are there in one kilobyte?",
        options: ["1000", "1024", "100", "102"],
        correctAnswer: "1024",
        point: 1,
    },
    {
        id: 14,
        ques: "First generation of computer was based on which technology?",
        options: ["Vacuum Tube", "Transistor", "Integrated Circuit", "Microprocessor"],
        correctAnswer: "Vacuum Tube",
        point: 1

    },

    {
        id: 15,
        ques: "What is the full form of SQL?",
        options: ["Structured Query Language", "Sequential Query Language", "Structured Question Language", "Sequential Question Language"],
        correctAnswer: "Structured Query Language",
        point: 1

    },
    {
        id: 16,
        ques: "What type of memory is not directly addressable by the CPU and requires special sfotware EMS (Expanded Memory Specification)",
        options: ["Extended Memory", "Expanded Memory", "Conventional Memory", "None of these"],
        correctAnswer: "Expanded Memory",
        point: 1

    },
    {
        id: 17,
        ques: "Which is the first computer language developed?",
        options: ["COBOL", "FORTRAN", "C", "BASIC"],
        correctAnswer: "FORTRAN",
        point: 1

    },
    {
        id: 18,
        ques: "Which of the following is not a programming language?",
        options: ["BASIC", "COBOL", "LOTUS", "FORTRAN"],
        correctAnswer: "LOTUS",
        point: 1
    },
    {
        id: 19,
        ques: "Which is the first compiler-level language developed by a team of IBM programmers led by John Backus and unveiled in 1957",
        options: ["BASIC", "PASCAL", "FORTRAN", "APL"],
        correctAnswer: "FORTRAN",
        point: 1
    },
    {
        id: 20,
        ques: "What is the full form of AJAX?",
        options: ["Asynchronous JavaScript and XHTML", "Asynchronous Java and XML", "Asynchronous Java and XHTML", "Asynchronous JavaScript and XML"],
        correctAnswer: "Asynchronous JavaScript and XML",
        point: 1

    },
    {
        id: 21,
        ques: "Which is a part of computer system that one can touch and feel?",
        options: ["Software", "Programs", "Hardware", "None of these"],
        correctAnswer: "Hardware",
        point: 1
    },
    {
        id: 22,
        ques: "Who invented the microprocessor?",
        options: ["Marcian Ted Hoff", "Federico Faggin", "Herman H Goldstein", "Joseph Jacquard"],
        correctAnswer: "Marcian Ted Hoff",
        point: 1

    },
    {
        id: 23,
        ques: "A program that enables you to perform calculations on rows and columns of data is called a",
        options: ["database program", "graphics program", "spreadsheet program", "word processor"],
        correctAnswer: "spreadsheet program",
        point: 1
    },
    {
        id: 24,
        ques: "What is the full form of XML?",
        options: ["eXtensible Markup Language", "eXecutable Multiple Language", "eXTra Multi-Program Language", "eXamine Multiple Language"],
        correctAnswer: "eXtensible Markup Language",
        point: 1
    },
    {
        id: 25,
        ques: "= SUM (B1:B8) is an example of a ______",
        options: ["Function", "Cell Address", "Formula", "Value"],
        correctAnswer: "Formula",
        point: 1
    },
    {
        id: 26,
        ques: "Which elements of a word document can be displayed in color?",
        options: ["Text", "Graphics", "Background", "All of these"],
        correctAnswer: "All of these",
        point: 1

    },
    {
        id: 27,
        ques: "A method for representing digital data analog signals by changing the phase of the analog carrier signal is known as",
        options: ["Amplitude Shift Keying", "Phase Shift Keying", "Frequency Shift Keying", "None of these"],
        correctAnswer: "Phase Shift Keying",
        point: 1
    },
    {
        id: 28,
        ques: "What is the full form of CSS?",
        options: ["Cascading Style Sheet", "Cascading Style Sheep", "Cartoon Style Sheet", "Cascading Super Sheet"],
        correctAnswer: "Cascading Style Sheet",
        point: 1
    },
    {
        id: 29,
        ques: "MODULA is a ",
        options: ["Software", "Hardware", "Programming Language", "Assembly Language"],
        correctAnswer: "Programming Language",
        point: 1
    },
    {
        id: 30,
        ques: "The OCR stand for ?",
        options: ["Optical Color Recognition", "Optical Character Recognition", "Optical CPU Recognition", "None of these"],
        correctAnswer: "Optical Character Recognition",

    },
    {
        id: 31,
        ques: "Which of the following is a data communication link that connects more than two stations, nodes etc",
        options: ["Point-to-point", "Multipoint", "Simplex", "Half-duplex"],
        correctAnswer: "Multipoint",
        point: 1

    },
    {
        id: 32,
        ques: "A wordd gets selected by clinking it to select a word, in Word",
        options: ["once", "twice", "three times", "four times"],
        correctAnswer: "twice",
        point: 1
    },
    {
        id: 33,
        ques: "TO move data from one part of the document to another, which of the following is used?",
        options: ["Copy and Paste", "Cut and Paste", "Copy and Delete", "Cut and Delete"],
        correctAnswer: "Cut and Paste",
        point: 1

    },
    {
        id: 34,
        ques: "What is the full form of HTTP?",
        options: ["Hyper Text Transfer Product", "Hyper Text Test Protocol", "Hyper Text Transfer Protocol", "Hyper Text Transfer Package"],
        correctAnswer: "Hyper Text Transfer Protocol",
        point: 1
    },
    {
        id: 35,
        ques: "Which of the following is not a type of computer software which can be used by end users?",
        options: ["System Software", "Utility Software", "Application Software", "None of these"],
        correctAnswer: "System Software",
        point: 1
    },
    {
        id: 36,
        ques: "By default, your document prints in ________ mode",
        options: ["Landscape", "Portrait", "Page Setup", "Print View"],
        correctAnswer: "Portrait",
        point: 1

    },
    {
        id: 37,
        ques: "Which of the following is incorrect",
        options: ["File-print", "File-open", "File-spelling", "File-save"],
        correctAnswer: "File-spelling",
        point: 1
    },
    {
        id: 38,
        ques: "What is the full form of SQL?",
        options: ["Structured Query Language", "Sequential Query Language", "Structured Question Language", "Sequential Question Language"],
        correctAnswer: "Structured Query Language",
        point: 1

    },
    {
        id: 39,
        ques: "What is the use of the F2 key?",
        options: ["To edit a cell", "To delete a cell", "To insert a cell", "None of these"],
        correctAnswer: "To edit a cell",
        point: 1
    },
    {
        id: 40,
        ques: "Which key is used to run a presentation in powerpoint ? ",
        options: ["F5", "F6", "F7", "F8"],
        correctAnswer: "F5",
        point: 1
    }, {
        id: 41,
        ques: "Mini computer are also called as",
        options: ["Micro Computer", "Super Computer", "Mid Range", "None of these"],
        correctAnswer: "Mainframe Computer",
        point: 1
    },
    {
        id: 42,
        ques: "What has the highest memory to store data?",
        options: ["Floppy Disk", "Hard Disk", "CD-ROM", "DVD-ROM"],
        correctAnswer: "DVD-ROM",
        point: 1
    },
    {
        id: 43,
        ques: "Control of computer system or subsystem by an operator who may intervene at arbitrary times is",
        options: ["Manual Control", "Mapping", "Shift register", "ALU"],
        correctAnswer: "Manual Control",
        point: 1
    },
    {
        id: 44,
        ques: "Who invented keyboard?",
        options: ["Herman Hollerith", "Charles Babbage", "Christopher Latham Sholes", "None of these"],
        correctAnswer: "Christopher Latham Sholes",
        point: 1
    },
    {
        id: 45,
        ques: "Who invented Analytic engine?",
        options: ["Herman Hollerith", "Charles Babbage", "Christopher Latham Sholes", "None of these"],
        correctAnswer: "Charles Babbage",
        point: 1
    },
    {
        id: 46,
        ques: "What is the size of MAC address?",
        options: ["32 bit", "48 bit", "64 bit", "128 bit"],
        correctAnswer: "48 bit",
        point: 1
    },
    {
        id: 47,
        ques: "What is the full form of TCP/IP?",
        options: ["Transmission Control Protocol/Internet Protocol", "Transmission Control Product/Internet Product", "Transmission Control Protocol/Internet Product", "Transmission Control Product/Internet Protocol"],
        correctAnswer: "Transmission Control Protocol/Internet Protocol",
        point: 1
    },
    {
        id: 48,
        ques: "In digital computer, all expressions are coded into",
        options: ["Binary digits", "Decimal digits", "Octal digits", "Hexadecimal digits"],
        correctAnswer: "Binary digits",
        point: 1
    },
    {
        id: 49,
        ques: "Codes consisting of lines of varying widths or lengths that are computer-readable are known as",
        options: ["Analog codes", "Digital codes", "Bar codes", "Magnetic codes"],
        correctAnswer: "Bar codes",
        point: 1
    },
    {
        id: 50,
        ques: "Acronym www in www.bankexamstoday.com stands for",
        options: ["World Whole Web", "World Wide Web", "World Wide Word", "World Whole Word"],
        correctAnswer: "World Wide Web",
        point: 1
    }

]

export default questionsList;