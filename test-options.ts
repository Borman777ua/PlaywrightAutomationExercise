import { test as base } from '@playwright/test'
import { PageManager } from './page-objects/AutomationExersisePageObject/PageObjectManager'


export type TestOptions  = {

setupEnviroment : string 
pageManager : PageManager
}

export const test = base.extend<TestOptions>({


    setupEnviroment : async({page}, use) =>{
    await page.goto('/')
     await use('default') 
    },

    pageManager: async ({ page,setupEnviroment }, use) => {
    const pm = new PageManager(page); // Створюємо екземпляр PageManager
    const navigation = pm.NavigateTo(); // Доступ до об'єкта навігації
    await navigation._handleWithCookies(); // Обробка куків, якщо необхідно
    await use(pm); // Передаємо PageManager у тест
  },
});

