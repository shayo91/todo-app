import { test, expect } from '@playwright/test';
import { MainPage } from '../pageObjects/mainPage';
let mainPage: MainPage;

test.beforeEach(async ({ page }) => {
    await page.goto('https://microsoftedge.github.io/Demos/demo-to-do/');
    mainPage = new MainPage(page);

});

test.describe('Todo App Tests', () => {

    test('TC001 - Adding a new item with valid user input', async () => {
        // Check if the heading is present
        expect(await mainPage.heading.innerText()).toContain('My tasks');

        // Add a new task and check if the task is added
        await mainPage.addTask('Buy groceries');

        // Check if the task count is 1
        expect(await mainPage.taskLabel.count()).toBe(1);

        // Check if the task label is correct
        expect(await mainPage.taskLabel.nth(0).innerText()).toBe('Buy groceries');

    });

    test ('TC005 - Markig a task as complete', async () => {
        // Add a new task to be marked as complete
        await mainPage.addTask('Task to be completed');
        await mainPage.page.waitForTimeout(1000);
        
        // Check if the task count is 1
        expect(await mainPage.taskLabel.count()).toBe(1);

        // Mark the task as complete
        await mainPage.completeTaskByIndexNumber(0);

        // Check if 'Completed' text is present 
        expect (mainPage.completedText).toBeVisible();

        // Check if the task is marked as complete by checking the checkbox status
        expect(await mainPage.taskLabel.nth(0).isChecked()).toBe(true);
    });

    test('TC009 - Deleting the task', async () => {
        // Add a new task to be deleted
        await mainPage.addTask('Task to be deleted');
        await mainPage.page.waitForTimeout(1000);

        // Check if the task count is 1
        expect(await mainPage.taskLabel.count()).toBe(1);

        // Delete the task
        await mainPage.deleteTaskByNumber(0);

        // Check the task count - should be 0
        expect(await mainPage.taskLabel.count()).toBe(0);
    });


})