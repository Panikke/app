# Garden Party London Website

A beautiful, responsive website for Garden Party London - featuring kokedama houseplants, fresh flowers, and mobile cargo bike stall services across South East London.

## Features

- **Multi-page React application** with clean, modern design
- **Shop page** showcasing all products and services
- **Behind the Party** - Tutorial and behind-the-scenes videos
- **After Party** - Educational content about plant facts and properties
- **Mobile responsive** design
- **Newsletter subscription** modal
- **Interactive testimonials** carousel
- **Location scheduling** for mobile stall

## Pages

1. **Homepage (Shop)** - Main product showcase
   - Kokedama plants
   - Fresh flower bouquets  
   - Houseplants
   - Garden consultation services

2. **Behind the Party** - Video content showing:
   - How kokedama are made
   - Cargo bike preparation
   - Flower sourcing
   - Market setup process

3. **After Party** - Educational videos about:
   - Plant science and biology
   - Air purification properties
   - Plant communication
   - Bonsai techniques

## Installation

1. Extract the files to your desired location
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or  
   yarn start
   ```

4. Open http://localhost:3000 in your browser

## Build for Production

```bash
npm run build
# or
yarn build
```

## Customization

- **Colors**: Update the Tailwind CSS classes throughout the components
- **Images**: Replace image URLs in `/src/data/mockData.js` with your own
- **Content**: Update text content in components and mock data
- **Videos**: Replace placeholder YouTube URLs with actual video content

## File Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Shadcn UI components
│   ├── Header.jsx       # Main navigation
│   ├── Footer.jsx       # Site footer
│   ├── Hero.jsx         # Homepage hero section
│   └── ...              # Other components
├── pages/               # Main page components
│   ├── HomePage.jsx     # Shop page
│   ├── BehindTheParty.jsx
│   └── AfterParty.jsx
├── data/
│   └── mockData.js      # Sample data for products, testimonials, etc.
├── hooks/
│   └── use-toast.js     # Toast notification hook
├── lib/
│   └── utils.js         # Utility functions
└── App.js               # Main app component
```

## Technologies Used

- **React 19** - Frontend framework
- **Tailwind CSS** - Styling
- **Shadcn/ui** - UI component library
- **Lucide React** - Icons
- **React Router** - Navigation

## Support

This website was created as a clone of www.tranquilplants.co.uk adapted for Garden Party London's mobile plant stall business model.

For questions or modifications, refer to the component files and mock data structure.