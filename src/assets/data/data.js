export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Samsul Arifin',
            child: 'Putra Pertama',
            father: 'Bapak Jaya',
            mother: 'Ibu Jayawati',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Fulana Putri Raja',
            child: 'Putri Pertama',
            father: 'Bapak Raja',
            mother: 'Ibu Raja',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2024',
            month: 'November',
            date: '14',
            day: 'Kamis',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2024',
            month: 'November',
            date: '14',
            day: 'Kamis',
            hours: {
                start: '11.00',
                finish: 'Selesai'
            }
        },
        address: 'Desa Batuanten, RT 001/ RW 002, Desa. Batuanten, Kec. Cilongok, Kab. Banyumas, Lorem (1234)'
    },

    link: {
        calendar: 'https://calendar.app.google/UJcD7kyZTTxMvjhL7',
        map: 'https://maps.app.goo.gl/Kp6kvdpvRdLsGGFMA',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Samsul Arifin',
            icon: './src/assets/images/bca.png',
            rekening: '10003535637'
        },
        {
            id: 2,
            name: 'Fulana Putri',
            icon: './src/assets/images/bri.png',
            rekening: '536647273828'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbw20dzmJFBhCGIOMJXuKadQa9HQkABtLK47t-SWU9JMLeR25NiU5vF1Dxk0I3k_HmSZCQ/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}