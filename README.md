# Lexis Nexis | Testing Project with Karma and Jasmine in Angular 19

## Overview

This document provides an introduction to the testing project using Karma and Jasmine in an Angular 19 application. The project has already been configured, and this guide is intended to introduce the tester responsible for conducting the tests and outline the workflow.

## Project Configuration

The project uses:

- **Angular 19**: A modern framework for building web applications.
- **Karma**: A test runner to execute unit tests in different browsers.
- **Jasmine**: A testing framework for writing clear and maintainable test cases.

The project has been set up with all the necessary dependencies, configurations, and scripts to run tests seamlessly.

## Instructions

In the current project you will find a set of routes and components that makes the project work. You mission is to create a end-to-end test suits for the main route.

- You must create a test suit for the rendering tasks and their crud operations
- You must create a test for the input validation for task form
- You must create a mock API calls and validate responses

## Sample Test Case

Here is an example of a Jasmine test case for an Angular component:

```typescript
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MyComponent } from "./my-component.component";

describe("MyComponent", () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });

  it("should render the title", () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain("Welcome to MyComponent!");
  });
});
```

## Consideraions and concerns

The project is configured to run all the test cases by it's own, you only need to take care of creating test cases.

If you need assistance, you founded a bug, or have some comments please refer to your host.

Happy hacking. 🎭
