# YatraAI: Your Conscious Journey

Build a modern, premium web application prototype for an Indian travel and tourism platform called "YatraAI".

IMPORTANT:

This is a student innovation prototype for a hackathon.

Do NOT build a generic travel booking website.

The core innovation is AI-powered sustainable and community-centric tourism.

MAIN IDEA:

The platform helps tourists discover personalized travel experiences while promoting lesser-known destinations, reducing tourist overcrowding, supporting local businesses, and encouraging sustainable tourism.

TECH STACK:

- React

- TypeScript

- Tailwind CSS

- Modern component architecture

- Use mock JSON data for now

- Do not require a database yet

- Do not require authentication yet

- Make the application fully responsive

DESIGN:

Create a premium modern Indian travel-tech interface.

Use beautiful destination imagery, cards, maps, clean typography, subtle animations and modern spacing.

The UI should look like a serious startup product rather than a college project.

COLOR DIRECTION:

Use a natural tourism-inspired visual language with greens, earthy neutrals and warm accent colors.

Do not overuse gradients.

Keep the interface clean and professional.

PAGES:

1. LANDING PAGE

Hero section:

Headline:

"Explore India Differently."

Subheadline:

"AI-powered travel that helps you discover hidden destinations, support local communities and travel more sustainably."

Primary CTA:

"Plan My Trip"

Secondary CTA:

"Explore Hidden Gems"

Show:

- beautiful Indian tourism imagery

- sustainability statistics

- popular destinations

- hidden gems

- local experiences

Add a section:

"Why YatraAI?"

Three cards:

- Personalized Travel

- Discover Hidden Gems

- Support Local Communities

Add a section showing:

"Tourism Impact"

Metrics:

- Hidden destinations discovered

- Local experiences promoted

- Sustainable trips planned

Use realistic demo numbers and clearly treat them as prototype/demo metrics.

2. TRIP PLANNER PAGE

Create a beautiful multi-step travel preference form.

Inputs:

Destination:

Madhya Pradesh

Trip duration:

1–7 days

Budget:

₹1,000–₹50,000

Travel group:

Solo

Couple

Family

Friends

Interests:

Nature

Heritage

Adventure

Culture

Food

Wildlife

Photography

Crowd preference:

Low

Medium

High

Travel style:

Budget

Balanced

Premium

Button:

"Generate My Trip"

Show a progress indicator.

3. RECOMMENDATION PAGE

After submitting the form, show:

"Your Personalized Recommendations"

Create destination cards containing:

- Destination image

- Destination name

- State

- Nature score

- Heritage score

- Crowd level

- Estimated budget

- Sustainability score

- Short explanation of why it matches the user's preferences

Example destinations for the prototype:

Pachmarhi

Orchha

Mandu

Chanderi

Tamia

Highlight one destination as:

"Best Match"

Show a matching percentage such as:

"92% Match"

IMPORTANT:

The recommendation should currently use mock scoring logic based on the user's preferences.

Do NOT claim that a machine learning model has been trained.

4. ITINERARY PAGE

When the user selects a destination, show:

"Your 3-Day AI Travel Plan"

Day 1

Morning

Afternoon

Evening

Day 2

Morning

Afternoon

Evening

Day 3

Morning

Afternoon

Evening

Each activity should have:

- time

- activity name

- estimated cost

- category

- short description

Include:

Total estimated budget

Travel distance

Sustainability score

5. HIDDEN GEMS PAGE

Create a section called:

"Hidden Gems Near You"

Show lesser-known destinations.

Each card should contain:

- image

- name

- distance

- crowd level

- estimated cost

- sustainability score

- "Explore" button

Add a visual explanation:

"Why we recommend this"

Example:

"Similar heritage experience with significantly lower expected crowd levels."

6. LOCAL EXPERIENCES PAGE

Title:

"Experience India Through Local Communities"

Show cards for:

Traditional Cooking Experience

Local Heritage Walk

Handicraft Workshop

Tribal Art Experience

Village Cultural Experience

Each card:

- image

- host name

- location

- price

- duration

- category

Use mock data.

7. SUSTAINABILITY PAGE

Create a visually impressive dashboard.

Title:

"Your Sustainable Travel Score"

Example:

87 / 100

Break the score into:

Local Economy

Low Crowd Destination

Public Transport

Eco-friendly Stay

Travel Efficiency

Use progress bars/charts.

Add:

"How your trip creates impact"

Show:

Money directed toward local businesses

Estimated travel emissions

Local experiences selected

Crowd pressure avoided

IMPORTANT:

Clearly label these as estimates/demo values.

8. NAVIGATION

Create a responsive navigation bar:

YatraAI

Explore

Plan Trip

Hidden Gems

Local Experiences

Impact

CTA:

"Plan My Trip"

9. FOOTER

Include:

YatraAI

"Explore India Differently."

Prototype disclaimer:

"Student innovation prototype."

FUNCTIONALITY:

- Navigation must work.

- Trip form must work.

- Selecting preferences should update the recommendation results.

- Recommendation cards should be clickable.

- Selecting a destination should open its itinerary.

- Use mock data stored in a clean data file.

- Implement a simple recommendation scoring function.

RECOMMENDATION LOGIC:

Each destination should have:

natureScore

heritageScore

adventureScore

cultureScore

foodScore

wildlifeScore

crowdScore

budgetScore

sustainabilityScore

Calculate a recommendation score using the user's selected interests, budget, crowd preference and sustainability preference.

Use a transparent scoring function.

IMPORTANT:

Keep recommendation logic separate from UI components so that later we can replace it with a real ML model.

CODE QUALITY:

- Organize components properly.

- Create reusable components.

- Keep data separate from components.

- Keep recommendation logic in a separate utility/service.

- Use TypeScript types.

- Avoid hardcoding everything directly into UI.

- Make the code easy for another student developer to understand.

DO NOT:

- Add hotel booking

- Add payment

- Add authentication

- Add complex admin dashboards

- Add unnecessary features

- Pretend that an ML model exists

- Use fake claims about real-world tourism statistics

The goal is a polished, convincing working prototype for an internal hackathon.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/67879f5e-5298-4c94-b849-33d7b6d8d25e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
