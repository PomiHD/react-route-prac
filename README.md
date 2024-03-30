## Challenge / Exercise

- [x] 1. Add five new (dummy) page components (content can be simple `<h1>` elements)
  - HomePage
  - EventsPage
  - EventDetailPage
  - NewEventPage
  - EditEventPage
- [x] 2. Add routing & route definitions for these five pages
  - `/` => HomePage
  - `/events` => EventsPage
  - `/events/<some-id>` => EventDetailPage
  - `/events/new` => NewEventPage
  - `/events/<some-id>/edit` => EditEventPage
- [x] 3. Add a root layout that adds the `<MainNavigation>` component above all page components
- [x] 4. Add properly working links to the MainNavigation
- [x] 5. Ensure that the links in MainNavigation receive an "active" class when active
- [x] 6. Output a list of dummy events to the EventsPage
  - Every list item should include a link to the respective EventDetailPage
- [x] 7. Output the ID of the selected event on the EventDetailPage
- [x] 8. **BONUS**: Add another (nested) layout route that adds the `<EventNavigation>` component above all `/events...` page components
