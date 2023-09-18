import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom"

//we can run a function before all the testcase
beforeAll(() => {
    console.log("Before Fn is running.");
});

//we can run a function before each and every the testcase
beforeEach(() =>{
    console.log("BeforeEach Fn running");
})

//we can run a function after completion of all the testcase
afterAll(() => {
    console.log("afterAll Fn is running.");
});

//we can run a function after each and every the testcase
afterEach(() =>{
    console.log("afterEach Fn running");
})


describe("button of Contact components", () => { //group of testcase
    test("Should load button inside contact component", () => {
        render(<Contact />);
    
        const button = screen.getByRole("button");
        //Assertion
        expect(button).toBeInTheDocument();
    });
    
    test("Should load submit text inside contact component", () => {
        render(<Contact />);
    
        const button = screen.getByText("Submit");
        //Assertion
        expect(button).toBeInTheDocument();
    });
});

//We can use 'it' as aliase of test 
it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
});

test("Should load 2 input boxes inside contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");  //this will return array of 2 react element. 
    //Assertion
    expect(inputBoxes.length).not.toBe(2+1);    // 2 != 3 so this will pass.
});
