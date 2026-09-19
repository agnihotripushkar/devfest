# 🚀 DevFest — The Hub for Every Dev Event

> **Hackathons, Meetups, and Conferences — All in One Place.**

DevFest is an event discovery and booking platform built for developers, tech enthusiasts, and community organizers. Discover trending tech events, explore detailed schedules, view event locations and formats (in-person or virtual), and book your spot seamlessly.

---

## 📖 About the Project

DevFest is designed to bridge the gap between event organizers and developer communities. Whether you're looking for upcoming hackathons to showcase your skills, local tech meetups to network, or industry-leading conferences to learn new technologies, DevFest brings them all together into a fast, beautiful, and responsive web application.

### Key Highlights
- **Curated Tech Events**: Browse through upcoming hackathons, conferences, and meetups.
- **Event Agendas & Details**: Comprehensive breakdowns of schedules, venues, modes (In-Person / Virtual), and target audiences.
- **Spot Booking**: Easy spot reservation system for attendees.
- **Similar Events Recommendation**: Discover related events based on tags and domains.
- **Modern Dark UI**: Glassmorphic styling, smooth animations, and interactive light-ray canvas effects.

---

## 👤 About the Author

- **Pushkar Agnihotri**
- **GitHub**: [@agnihotripushkar](https://github.com/agnihotripushkar)
- **Repository**: [agnihotripushkar/devfest](https://github.com/agnihotripushkar/devfest)

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Server Components & Server Actions)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/)
- **Image Hosting**: [Cloudinary](https://cloudinary.com/)

---

## 🚦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/agnihotripushkar/devfest.git
cd devfest
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
MONGODB_URI=your_mongodb_connection_string
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📁 Project Structure

```text
devfest/
├── app/
│   ├── api/events/          # API endpoints for fetching & managing events
│   ├── events/[slug]/       # Dynamic event details page
│   ├── globals.css          # Design system & custom utilities
│   ├── layout.tsx           # Root layout with navigation & canvas effects
│   └── page.tsx             # Homepage with hero & featured events
├── components/
│   ├── BookEvent.tsx        # Event registration & booking component
│   ├── EventCard.tsx        # Reusable card component for event listings
│   ├── ExploreBtn.tsx       # Smooth scroll explore button
│   ├── LightRays.tsx        # Canvas background visual effect
│   └── Navbar.tsx           # Sticky glassmorphism header
├── database/                # Mongoose models (Event, Booking)
└── lib/                     # Server actions & MongoDB connection helper
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
