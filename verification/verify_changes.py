from playwright.sync_api import sync_playwright

def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1280, "height": 800})
        page = context.new_page()

        # 1. Store Page
        print("Navigating to Store...")
        page.goto("http://localhost:3001/Store")
        # Wait for something that indicates load. StoreSidebar has "Category"
        try:
             page.wait_for_selector("text=Category", timeout=10000)
        except:
             print("Timeout waiting for 'Category'. taking screenshot anyway.")

        # Take screenshot of Store Desktop
        print("Taking Store screenshot...")
        page.screenshot(path="verification/store_desktop.png", full_page=True)

        # 2. About Page
        print("Navigating to About...")
        page.goto("http://localhost:3001/About")
        page.wait_for_selector("h1", timeout=10000) # Wait for title

        # Take screenshot of About Desktop
        print("Taking About screenshot...")
        page.screenshot(path="verification/about_desktop.png", full_page=True)

        # 3. Mobile View (Store)
        print("Checking Mobile Store...")
        context_mobile = browser.new_context(viewport={"width": 375, "height": 667})
        page_mobile = context_mobile.new_page()
        page_mobile.goto("http://localhost:3001/Store")
        # Wait for Filter button
        try:
            page_mobile.wait_for_selector("button:has-text('Filters')", timeout=10000)
        except:
            print("Timeout waiting for Mobile Filter button.")

        print("Taking Mobile Store screenshot...")
        page_mobile.screenshot(path="verification/store_mobile.png", full_page=False)

        # Open Sidebar
        try:
            page_mobile.click("button:has-text('Filters')")
            page_mobile.wait_for_timeout(1000) # Wait for animation
            print("Taking Mobile Sidebar screenshot...")
            page_mobile.screenshot(path="verification/store_mobile_sidebar.png", full_page=False)
        except Exception as e:
            print(f"Could not click filter button: {e}")

        browser.close()

if __name__ == "__main__":
    try:
        verify_changes()
        print("Verification script finished successfully.")
    except Exception as e:
        print(f"Error: {e}")
