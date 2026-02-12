Clean readable markdown with images properly integrated in Notion:
https://www.notion.so/PRA01-Miquel-de-Riba-305985ddc47280a68035c235c0b656a2?showMoveTo=true&saveParent=true

## Apartment Predictor React Front End

### **Main List View**

To keep the user interface clean for the final client, an **Editor** button was added, providing ‘admin’ powers only when clicked.

![Captura de pantalla 2026-02-12 a les 22.00.57.png](attachment:a45cb2aa-6ce0-4e94-a87a-bd2508c63a93:Captura_de_pantalla_2026-02-12_a_les_22.00.57.png)

![Captura de pantalla 2026-02-12 a les 22.01.49.png](attachment:d88cef2d-cb64-46aa-955c-dcc26cea25b9:Captura_de_pantalla_2026-02-12_a_les_22.01.49.png)

The same white card element used to display apartments was re-used to be the “ + Create new apartment” element, making it a seamless experience to use the web app. The form to create and edit the apartments is also naturally integrated into the UI.

![Captura de pantalla 2026-02-12 a les 22.04.51.png](attachment:e2f67e5a-706a-457b-93f5-1557bf9062d0:Captura_de_pantalla_2026-02-12_a_les_22.04.51.png)

Only very basic data of the apartment was chosen to be editable, mainly for aesthetic purposes.

### **Detail view**

The detail view is unassuming and uncomplicated, but it is designed to provide all the essencial data in a simple easy to ingest page. The review score is calculated from the AI-generated hard coded reviews, rounded to one decimal digit. The stars are also dynamic.

![Captura de pantalla 2026-02-12 a les 22.09.28.png](attachment:171494a1-d457-4d81-8b26-d9e441f1a0c7:Captura_de_pantalla_2026-02-12_a_les_22.09.28.png)

Some **basic features** will be shown **no matter their value** (Elevator / No elevator) as it was considered important data for the final client to know. Other **non-essential** features are **only** shown **if they are available** (Air Conditioning).

![Captura de pantalla 2026-02-12 a les 22.11.59.png](attachment:78e1c016-cb53-4f7e-a5ca-dc18172b7f10:Captura_de_pantalla_2026-02-12_a_les_22.11.59.png)

When **deleting** an apartment, the user is asked to **confirm** the action. The buttons again have been chosen to show up naturally and unintrusively in the UI. The website has a **dark mode** which reacts to the system preferences.

![Captura de pantalla 2026-02-12 a les 22.14.39.png](attachment:f63fc1ce-be34-4644-b0d9-a5508900750b:Captura_de_pantalla_2026-02-12_a_les_22.14.39.png)

Various **states** have been used to handle the **display of components**:

- **editorMode** handles Create new apartment, Edit and Delete buttons
- **creatingApartment** handles the Create new apartment form
- **editingApartment** handles the Edit form, as well as specifies which apartment is being edited

This separation of states that overlap means some components have a conditional that depends on more than one state. For instance, the Edit button inside an apartment card in the list view should only be shown when we are in **editor mode,** but we **aren’t** already editing **that particular apartment**.

```jsx
{
  editorMode && editingApartment !== apartment.id ? (
    <button
      className="edit"
      onClick={(e) => {
        e.stopPropagation();
        setEditingApartment(apartment.id);
      }}
    >
      Edit
    </button>
  ) : null;
}
```

Other **state hooks**:

- **apartments** is the temporal value of the array of apartments, as to not edit the original .ts file
- **selectedApartment** controls which apartment should the Detail view show
- **confirming** inside the DeleteHub component controls the Cancel Confirm buttons

### Programming choices and possible improvements

Overall I’m satisfied with the amount of hooks used and their architecture. There’s definetly room for improvement in the main ApartmentListView component, it could be made more readable removing inline styling and maybe separating code into even more components. But the result was reasonable.

- The inputs to be **provided/edited** could be extended to the whole apartment object, and the form could be moved to the Detail view, to have a more comfortable reference as to which data was the original one.
- **Typescript** could have been used in the whole project.
- **Routing** could be implemented for the user to be able to use the browser navigation features (back, forward…)

### Apartment object structure

```jsx
export interface Apartment {
  id: number;
  title: string;
  price: number;
  rooms: number;
  bedrooms: number;
  bathrooms: number;
  floor: number;
  surface: number;
  location: string;
  areaCode: number; // Number judging how desirable the location is (1-10)
  description: string;
  createdAt: string;
  reviews: { id: number; rating: number; title: string; comment: string }[];
  imageUrl?: string;
  interested?: boolean;
  AC?: boolean;
  furnished?: boolean;
  elevator?: boolean;
  balcony?: boolean;
  garage?: boolean;
  terrace?: boolean;
}
```
