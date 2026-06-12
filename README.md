# Hava Durumu (Weather App)

Gerçek zamanlı hava durumu bilgisini gösteren React + Vite ile geliştirilmiş bir web uygulamasıdır.

## Özellikler

- 🌤️ Şehir adına göre hava durumu araması
- 🌡️ Sıcaklık, nem oranı, rüzgar hızı ve hava basıncı bilgileri
- 🕐 Gerçek zamanlı saat ve tarih gösterimi
- 📱 Responsive tasarım (Bootstrap kullanıyor)
- ⚡ Hızlı yükleme (Vite ile)

## Kullanılan Teknolojiler

- **React 19.2.6** - UI kütüphanesi
- **Vite 8.0.12** - Build tool ve dev server
- **Bootstrap 5.3.8** - CSS framework
- **OpenWeatherMap API** - Hava durumu verileri

## Kurulum

### Gereksinimler

- Node.js (v14 ve üzeri)
- npm veya yarn

### Adımlar

1. Proje dizinine gidin:

```bash
cd havaDurumu
```

2. Bağımlılıkları yükleyin:

```bash
npm install
```

3. `.env.local` dosyası oluşturun ve API anahtarını ekleyin:

```
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

OpenWeatherMap API anahtarını almak için:

- [OpenWeatherMap](https://openweathermap.org/api) sitesine gidin
- Ücretsiz hesap oluşturun
- API anahtarınızı kopyalayın

## Geliştirme

Geliştirme sunucusunu başlatmak için:

```bash
npm run dev
```

Uygulama `http://localhost:5173` adresinde açılacaktır. Dosyaları değiştirirken sayfada otomatik olarak yenileme yapılır (Hot Module Replacement).

## Build Etme

Ürün için build almak için:

```bash
npm run build
```

Derlenmiş dosyalar `dist` klasörüne kaydedilecektir.

## Preview

Build edilen uygulamayı yerel olarak görüntülemek için:

```bash
npm run preview
```

## Proje Yapısı

```
havaDurumu/
├── src/
│   ├── components/
│   │   ├── WeatherCard.jsx      # Hava durumu kartı
│   │   ├── WeatherDetails.jsx   # Detaylı hava bilgileri
│   │   ├── DateTimeDisplay.jsx  # Saat ve tarih gösterimi
│   │   └── SearchBar.jsx        # Şehir arama barı
│   ├── App.jsx                  # Ana bileşen
│   ├── App.css                  # Uygulama stilleri
│   ├── index.css                # Global stiller
│   └── main.jsx                 # Entry point
├── public/
│   ├── favicon.svg              # Favicon
│   └── icons.svg                # İkonlar
├── index.html                   # HTML template
├── vite.config.js               # Vite konfigürasyonu
├── eslint.config.js             # ESLint kuralları
├── package.json                 # Proje bağımlılıkları
└── README.md                    # Bu dosya
```

## Bileşenler

### SearchBar

Şehir adını alanmasına ve arama yapmasına olanak tanır.

### WeatherCard

Seçilen şehrin hava durumu bilgilerini kart formatında gösterir.

### WeatherDetails

Sıcaklık, nem, rüzgar hızı ve basınç gibi detaylı hava bilgilerini gösterir.

### DateTimeDisplay

Güncel saat ve tarihi gerçek zamanlı olarak gösterir.

## ESLint

Kod kalitesini kontrol etmek için:

```bash
npm run lint
```

## Notlar

- Uygulamaya ilk açılışta "Istanbul" şehrinin hava durumu gösterilir
- API istekleri hata yaparsa kullanıcıya Türkçe hata mesajı gösterilir
- Saat ve tarih gösterimi her saniyede güncellenir
