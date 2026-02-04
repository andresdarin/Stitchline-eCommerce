from playwright.sync_api import Page, expect, sync_playwright

def verify_changes(page: Page):
    # 1. Verify Store Page (Sidebar)
    print("Navigating to Store...")
    page.goto("http://localhost:3000/Store")

    # Expect Sidebar headers
    expect(page.get_by_text("Category", exact=True)).to_be_visible()
    expect(page.get_by_text("Collection", exact=True)).to_be_visible()
    expect(page.get_by_text("Size", exact=True)).to_be_visible()

    # Screenshot Desktop Store
    page.screenshot(path="verification/store_desktop.png")
    print("Store Desktop screenshot taken.")

    # 2. Verify About Page (New Design)
    print("Navigating to About...")
    page.goto("http://localhost:3000/About")

    # Expect New Header Text
    expect(page.get_by_role("heading", name="About Us")).to_be_visible()
    expect(page.get_by_text("We are crafting the future")).to_be_visible()

    # Screenshot About Page
    page.screenshot(path="verification/about_page.png", full_page=True)
    print("About Page screenshot taken.")

    # 3. Verify Mobile Sidebar
    print("Checking Mobile Sidebar...")
    page.set_viewport_size({"width": 375, "height": 812})
    page.goto("http://localhost:3000/Store")

    # Expect Filter Button
    filter_btn = page.get_by_role("button", name="Filters")
    expect(filter_btn).to_be_visible()

    # Open Sidebar
    filter_btn.click()

    # Expect Sidebar content visible
    expect(page.get_by_text("Category", exact=True)).to_be_visible()

    page.screenshot(path="verification/store_mobile_sidebar.png")
    print("Store Mobile screenshot taken.")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_changes(page)
        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error.png")
        finally:
            browser.close()
