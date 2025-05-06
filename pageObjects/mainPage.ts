import { Page, Locator } from '@playwright/test';
import { Helper } from '../helpers/helper';

export class MainPage extends Helper {
    private taskInput: Locator;
    private addButton: Locator;
    public heading: Locator;
    public taskLabel: Locator;
    public completedText: Locator;
    private deleteButton: Locator;

    constructor(page: Page) {
        super(page);

        // Locators for the main page
        this.heading = this.page.getByRole('heading', { name: 'My tasks' })
        this.taskInput = this.page.locator('#new-task');
        this.addButton = this.page.locator('input[type="submit"]');
        this.taskLabel = this.page.locator('li.task label');
        this.deleteButton = this.page.locator('.delete');
        this.completedText = this.page.locator('li.divider').filter({ hasText: 'Completed' });

    }


    // Methods / Actions for the main page
    async addTask(task: string) {
        await this.taskInput.clear();
        await this.taskInput.fill(task);
        await this.addButton.click();
    }

    // Get the task label by its index number and clicks the delete button on it
    async deleteTaskByNumber(taskNumber: number) {
        await this.deleteButton.nth(taskNumber).click();
    }

    // Get the task label by its index number and marks it as complete
    async completeTaskByIndexNumber(taskNumber: number) {
        await this.taskLabel.nth(taskNumber).click({ force: true });
    }





}