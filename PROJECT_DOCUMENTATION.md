# VVTogether - Wedding Invitation Website

## 📋 Project Overview

**VVTogether** is a beautiful, modern wedding invitation website created for Venu and Vasavi's wedding celebration. The project is hosted at **vvtogether.online** and serves as a digital invitation platform for guests to learn about the wedding events, view photos, and engage with multimedia content.

## 💕 Purpose

This project creates an elegant, interactive digital wedding invitation that:
- Announces the wedding date and venue details
- Shares the couple's love story
- Displays event details with embedded maps
- Showcases engagement and wedding photos
- Plays wedding background music
- Features interactive digital invitation cards
- Provides a memorable online experience for guests

## 🎯 Key Features

### 1. **Video Banner Section**
   - Full-height (100vh) background video with autoplay
   - Audio toggle button (🔈 Unmute) in top-right corner
   - Responsive design with 60vh height on mobile
   - Muted by default (browser autoplay policy compliance)

### 2. **Hero Section**
   - Eye-catching heading "Venu ❤️ Vasavi"
   - Wedding date: **November 1, 2025**
   - Hashtags: #VVForever | #VVTogether
   - Call-to-action button "Join Our Celebration"

### 3. **Our Story Section**
   - Personal narrative about how Venu (Data Scientist) and Vasavi (Assistant Grade-III Technical at FCI) met
   - Emphasizes their shared values: passion, dedication, and independence
   - Sets emotional tone for the invitation

### 4. **Wedding Details Section**
   - **Wedding Ceremony**
     - Date: November 1, 2025
     - Venue: Sri Tirumala gardens, Malkajgiri
     - Time: 10:51 AM
   - **Reception**
     - Date: November 2, 2025
     - Venue: Venu's Residence, Siddipet
     - Theme: Elegant Evening
   - Each event includes embedded Google Maps for easy navigation

### 5. **Interactive Wedding Invitation Cards**
   - **Groom's Card**: Bilingual invitation (English & Telugu)
     - Front cover with beautiful design
     - Inside pages with invitation details in two languages
   - **Bride's Card**: Similar interactive card for bride
   - **Interaction Methods**:
     - Desktop: Hover to open/close
     - Mobile: Tap to toggle open/closed state

### 6. **Photo Gallery**
   - "Our Engagement Moments" section
   - 12 engagement photos in a responsive grid layout
   - Lightbox functionality for expanded viewing (using Lightbox2 library)
   - Background music toggle to play wedding song during gallery browsing
   - Photos are organized chronologically showing key moments

### 7. **Audio Features**
   - Background wedding music that plays in the gallery section
   - Separate audio toggle for banner video

## 🛠️ Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Styling Framework**: Custom CSS with Poppins font
- **Multimedia Libraries**: 
  - Lightbox2 (for photo gallery)
  - Native HTML5 audio and video elements
- **Maps Integration**: Google Maps embedded iframes
- **Responsive Design**: Mobile-first approach

## 📁 Project Structure

```
vvtogether/
├── index.html              # Main wedding website
├── style.css               # Primary stylesheet
├── README.md               # Basic project info (just "# vvtogether")
├── CNAME                   # Domain configuration (vvtogether.online)
├── images/                 # Graphics and invitation card images
│   ├── hero.JPG
│   ├── page1.jpg           # Groom's invitation cover
│   ├── page2.jpg           # Groom's invitation inside (English)
│   ├── page3.jpg           # Groom's invitation inside (Telugu)
│   ├── bride_invite1.jpg   # Bride's invitation cover
│   ├── bride_invite2.jpg   # Bride's invitation inside (English)
│   ├── bride_invite3.jpg   # Bride's invitation inside (Telugu)
│   └── [backups & variants]
├── photos/                 # Engagement & event photos
│   ├── photo1.jpg through photo12.jpg
│   └── (12 engagement moment photos)
├── videos/                 # Background video content
│   └── bg.mp4              # Banner background video
├── music/                  # Audio files
│   └── wedding-song.mp3    # Background music for gallery
├── pdf/                    # PDF documents (currently empty)
└── .git/                   # Git version control
```

## 💐 Wedding Event Details

### Ceremony
- **Type**: Wedding Ceremony
- **Date**: November 1, 2025
- **Time**: 10:51 AM (auspicious time)
- **Location**: Sri Tirumala gardens, Malkajgiri, Secunderabad, Telangana 500047
- **Status**: Active (primary event)

### Reception
- **Type**: Reception / Celebration
- **Date**: November 2, 2025
- **Location**: Venu's Residence, Siddipet
- **Theme**: Elegant Evening
- **Note**: Follows the wedding ceremony the next day

### Previous Event (Commented Out)
- Haldi Ceremony (October 30, 2025) - Currently not displayed on the website

## 👥 Key Information

- **Groom**: Venu (Data Scientist)
- **Bride**: Vasavi (Assistant Grade-III Technical at FCI)
- **Wedding Hashtags**: #VVForever #VVTogether
- **Website Domain**: vvtogether.online
- **Engagement Photos**: 12 curated moments capturing their journey together

## 🎨 Design Elements

- **Color Scheme**: Romantic with dark overlays and white text
- **Typography**: Poppins font family (300, 500, 700 weights)
- **Responsive Breakpoint**: 600px for mobile adaptation
- **Interactive Elements**:
  - Hover effects on desktop
  - Touch-friendly tap interactions on mobile
  - Audio/video controls with accessibility (aria labels)
  - Lightbox image expansion

## 📱 Accessibility Features

- Semantic HTML5 structure
- ARIA attributes for button states (`aria-pressed`, `aria-label`)
- Keyboard accessible buttons
- Mobile viewport meta tag for responsive design
- Fallback text for video (download link if unsupported)

## 🚀 Hosting & Deployment

- **Platform**: GitHub Pages (evident from .git folder and CNAME file)
- **Custom Domain**: vvtogether.online
- **CDN Libraries**:
  - Google Fonts (Poppins)
  - Lightbox2 (CDN hosted)
  - Embedded Google Maps

## 📝 File Details

| File | Purpose | Status |
|------|---------|--------|
| `index.html` | Main website structure and content | Active |
| `style.css` | Styling and responsive design | Active |
| `bg.mp4` | Banner background video | Used |
| `wedding-song.mp3` | Gallery background music | Optional toggle |
| `photos/` | 12 engagement photographs | Gallery display |
| `images/` | Invitation cards & hero images | Active use |
| `pdf/` | Documents folder | Empty (reserved) |
| `CNAME` | Domain mapping | Configured |

## ✨ Special Features

1. **Bilingual Support**: Invitation cards in English and Telugu
2. **Audio Toggle**: Smart banner audio control for user preference
3. **Interactive Cards**: Flip animation for invitation cards
4. **Embedded Maps**: Direct navigation links to venues
5. **Background Music**: Optional wedding song during photo browsing
6. **Responsive Video**: Full-height video banner adapts to mobile
7. **Photo Lightbox**: Enhanced viewing experience with Lightbox2

## 🔧 Technical Considerations

- Video is muted by default (browser autoplay policy)
- Users must interact to unmute and play audio
- Lightbox library loaded from CDN for gallery functionality
- All assets (images, videos, music) are locally hosted for control and speed
- CSS includes inline styles for video banner to ensure proper display

## 📊 Content Summary

- **Total Images**: 10 (invitation cards) + 12 (engagement photos)
- **Total Videos**: 1 (bg.mp4)
- **Total Audio Files**: 1 (wedding-song.mp3)
- **Event Pages**: 2 (Wedding + Reception)
- **Interactive Elements**: 3 (banner audio, invitation cards, gallery)

---

**Created**: 2026  
**Wedding Date**: November 1, 2025  
**Website**: vvtogether.online  
**Hashtags**: #VVForever #VVTogether
