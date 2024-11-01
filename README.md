# Instock-MCSD

- initial project setup
- install sass as a dependancy
- created folder structure and added .gitkeep placeholder files
- removed unnecessary files from initial create-react-app project init
- added logo and icons assets from project asset file
- added extensions to .gitignore file

## Develop Branch

- created develop branch

## SASS files and Font Family

- sass partials added( \_colors, \_fontfamily, \_globals, \_mediaQ, \_mobilefont \_tabletdesktopfont, \_paddingandmargins)
- downloaded font family and created folder for fonts to store locally
- updated \_global partial to import \_fontfamily partial for proper font weight

### Footer

- create component and styles
- finish with SASS partials
- update styling to match new font class names

### Item details view

- create the header section of the item card
- create some initial style classes
- import assets, styles, and components. set state and navigation
- create API call to get item details
- create API call to get warehouse name, using warehouse ID from previous call
- useEffect to call for item details when param is available, and warehouse name when warehouse ID is available

## WarehouseList Component & SearchBar Component

- created Warehouse.jsx as placeholder
- WarehouseList will do the mapping to display list of warehouses
- SearchBar comp created for WarehouseList and InventoryList

## feature/header-component-daniel

- created branch
- created Header component folder and .js & .scss files
- begin creating Header component
- complete layout and styling for mobile breakpoint
- complete layout and styling for tablet breakpoint
- complete layout and styling for desktop breakpoint
- added h3 tag to link elements
- included font-sizing to scss for h3 tags

## feature/delete-warehouse-modal-daniel

- added react-modal package
- created modal component .jsx and .scss files
- coded and styled modal component for mobile breakpoint
- styled for tablet breakpoint
- styled for desktop breakpoint
- added functionality to cancel & close modal window
- added close icon, added functionality to close modal window
- added functionality to delete warehouse
- refactored modal component to take in props so that it can be used for the delete inventory ticket
- refactored deleteWarehouseBtn logic to map warehouse state so we could use the warehouse_name property in the modal window title and text verbiage

## feature/ delete inventory modal

- integrated Modal component into InventoryList.jsx
- edited delete button onClick property to include callback function instead of prop
- tested with temp variables until inventory.map() exists

## Warehouse details component

- Added api url to app.jsx
- Added main section to app.jsx and styled the background in app.scss
- created .env.sample file
- Warehouse details component added
- created a componentfor table header
- created function to make get request to the api endpoint
- displayed warehouse details
- added the page header.
- added styling to the main site background.
- added on click to the warehouse name to link to warehouse details page.
- create .env.sample to connect to the backend api.

```bash
REACT_APP_API_BASE_URL=< Insert backend api url here >
```

## Setup react router

- created routing for the app using react router.
- created placeholder components.

## Add Inventory Item component

- Changed Search bar component name to Input.
- Added more functionality to the the input component
- Created a component for Dropdown Menu.
- Created a reusable component for inventory form.
- Added to the Add Inventory Item component.
- Passed an onClick prop to the button component.

## Edit Inventory component

- Form is updating the item successfully.
- Added onclick to the edit button in the inventory list amd warehouse details inventory list.

## feature/ Add Warehouse component

- created AddWarehouse component
- create structure for the component to match the mockup
- import Input component
- style component for all break points
- added validation for email and phone number
- corrected styling for header
- debugged errant warehouse posting to db after cancel
- edited emailRegex to allow for top level domains up to 12 characters. ie: .photography

## Search Functionality

- Search functionality implemented using useSearchParams for Warehouse list and Inventory List
