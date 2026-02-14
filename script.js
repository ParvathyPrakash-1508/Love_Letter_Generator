const letterTemplates = 
{
    romantic: 
    {
        openings: 
        [
            "My Dearest {partner},",
            "To My Beloved {partner},",
            "My Darling {partner},",
            "To the Love of My Life, {partner},",
            "My Sweet {partner},",
            "Dearest {partner},",
            "My One and Only {partner},",
            "To My Heart's Desire, {partner},",
            "My Precious {partner},",
            "To the One I Adore, {partner},"
        ],
        bodies: 
        [
            "Every moment I spend with you feels like a beautiful dream I never want to wake from.",
            "You are the missing piece I never knew my heart was searching for.",
            "In your eyes, I found my home. In your heart, I found my love.",
            "My love for you grows stronger with each passing day, like a rose blooming in the spring.",
            "You illuminate my world like the sun breaks through the morning clouds.",
            "Your smile is the light that guides me through my darkest days.",
            "With you, I've discovered what it truly means to love and be loved.",
            "Every heartbeat whispers your name, every breath I take is for you.",
            "You've painted my world in colors I never knew existed.",
            "Time stands still when I'm with you, and yet forever wouldn't be enough.",
            "You are my today and all of my tomorrows, my always and forever.",
            "In a sea of people, my eyes will always search for you.",
            "Your love is the melody that my heart beats to.",
            "You've turned my ordinary life into an extraordinary fairytale.",
            "Like a compass points north, my heart always finds its way to you.",
            "You are the answer to prayers I didn't know I was making.",
            "Every love song suddenly makes sense when I think of you.",
            "Your presence in my life is the greatest gift I've ever received.",
            "I fall in love with you more deeply with every sunrise we share.",
            "You make me believe in magic, destiny, and happily ever after."
        ],
        closings: 
        [
            "Forever and always yours,\n{sender}",
            "With all my heart,\n{sender}",
            "Eternally yours,\n{sender}",
            "All my love,\n{sender}",
            "Yours completely,\n{sender}",
            "Love always,\n{sender}",
            "With endless devotion,\n{sender}",
            "Loving you forever,\n{sender}",
            "Yours in every lifetime,\n{sender}",
            "With infinite affection,\n{sender}"
        ]
    },
    funny: 
    {
        openings: 
        [
            "Hey {partner}, you magnificent weirdo!",
            "Yo {partner},",
            "Dear {partner} (the person who tolerates me),",
            "To {partner}, my favorite human,",
            "What's up {partner}?",
            "Dear {partner}, my partner in crime,",
            "Hey there {partner}, you goofball,",
            "To {partner}, the peanut butter to my jelly,",
            "Dear {partner}, my better half (debatable),",
            "Hey {partner}, you legend!"
        ],
        bodies: 
        [
            "I love you more than pizza, and that's saying A LOT.",
            "You're the reason I wake up every morning (okay, that and my alarm clock).",
            "I promise to always laugh at your jokes, even the really bad ones.",
            "You're stuck with me forever, like gum on a shoe, but in a romantic way!",
            "I love you even when you steal all the blankets at night.",
            "You make me laugh so hard that sometimes I snort. That's true love.",
            "I'd fight a bear for you. A small bear. Maybe a medium-sized one. Okay, a teddy bear.",
            "You're like my favorite pair of sweatpants: comfortable, reliable, and I never want to let you go.",
            "Life with you is like a romantic comedy, except with more snacks and less running through airports.",
            "You're the cheese to my macaroni, the marshmallow to my hot chocolate.",
            "I love how we don't have to act normal around each other.",
            "You're the only person I'd share my fries with. And that's basically a marriage proposal.",
            "Thanks for putting up with my weirdness. I'd be lost without your matching weirdness!",
            "You make adulting slightly less terrible, and that's the highest compliment I can give.",
            "I love you more than WiFi, and that's really saying something.",
            "You're the reason I check my phone and smile like an idiot.",
            "I'd give up my last slice of cake for you. Maybe. Okay, we can share.",
            "You're the only person whose weird I can tolerate forever.",
            "I love you even when you sing off-key in the shower.",
            "You're my favorite weirdo in the whole wide world."
        ],
        closings: 
        [
            "Love you tons,\n{sender}",
            "Your favorite person,\n{sender}",
            "XOXO (and tacos),\n{sender}",
            "Yours weirdly and wonderfully,\n{sender}",
            "Keep being awesome,\n{sender}",
            "Your biggest fan,\n{sender}",
            "Later gator,\n{sender}",
            "Stay cool (but not cooler than me),\n{sender}",
            "Forever your weirdo,\n{sender}",
            "Your partner in shenanigans,\n{sender}"
        ]
    },
    cute: 
    {
        openings: 
        [
            "Hi {partner}! 🥰",
            "Hey cutie {partner},",
            "To my sweet {partner},",
            "Dear {partner}, my sunshine,",
            "Hi there {partner}!",
            "To {partner}, my everything,",
            "Sweet {partner},",
            "Hello my lovely {partner},",
            "Dear {partner}, my angel,",
            "Hey {partner}, sweetie!"
        ],
        bodies: 
        [
            "You make my heart do little happy dances every time I see you!",
            "I get butterflies just thinking about you, and I never want that feeling to stop.",
            "Your hugs are my favorite place in the whole world.",
            "You're like a warm cup of cocoa on a cold day - pure comfort and happiness.",
            "Every little thing you do makes me fall for you all over again.",
            "Your laugh is my favorite sound in the entire universe.",
            "I love how you make ordinary moments feel magical.",
            "You're my favorite notification, my favorite hello, my favorite everything.",
            "Being with you feels like coming home to my favorite cozy spot.",
            "You're sweeter than all the candy in the world combined!",
            "I could list a million things I love about you, but that would take forever (and I'd rather spend that time with you).",
            "You make even rainy days feel sunny and bright.",
            "My day isn't complete without talking to you or seeing your adorable face.",
            "You're the reason I believe in magic and fairy tales.",
            "Every time you smile, my whole world lights up.",
            "You make my heart feel like it's full of sparkles and rainbows.",
            "I love the way you make me feel like I'm the luckiest person alive.",
            "Your kindness and sweetness make every day better.",
            "You're my happy place, my safe space, my favorite everything.",
            "I love you more than all the stars in the sky!"
        ],
        closings: 
        [
            "Hugs and kisses,\n{sender}",
            "With lots of love,\n{sender}",
            "Your sweetheart,\n{sender}",
            "Love you bunches,\n{sender}",
            "Sweet dreams,\n{sender}",
            "Yours truly,\n{sender}",
            "All the cuddles,\n{sender}",
            "Forever your {sender} 💕",
            "Sending you love,\n{sender}",
            "Your cuddle buddy,\n{sender}"
        ]
    },
    poetic: 
    {
        openings: 
        [
            "Dearest {partner},",
            "My Muse, {partner},",
            "To {partner}, my poetry in motion,",
            "Beloved {partner},",
            "My {partner},",
            "To the one who inspires my heart, {partner},",
            "Dear {partner}, my sonnet,",
            "To {partner}, my greatest verse,",
            "Most Cherished {partner},",
            "To {partner}, my lyric and my song,"
        ],
        bodies: 
        [
            "Like moonlight dancing on tranquil waters, your presence brings serenity to my soul.",
            "You are the verse I never knew I needed, the rhyme to my reason.",
            "In the garden of life, you are the rarest bloom, precious beyond measure.",
            "Your love writes poetry on the pages of my heart with every stolen glance.",
            "Like stars that pierce the velvet night, your love illuminates my existence.",
            "You are the symphony that plays in the concert hall of my heart.",
            "Our love story is written in the stars, a celestial masterpiece.",
            "Like autumn leaves that paint the earth in gold, you color my world with wonder.",
            "You are the crescendo in life's grand symphony, the perfect note.",
            "In you, I found the missing stanza to the poem of my life.",
            "Your essence is captured in every sunrise, every gentle breeze, every whispered promise.",
            "Like a timeless ballad, our love echoes through eternity.",
            "You are the metaphor I've searched for, the perfect simile to complete me.",
            "In the anthology of my heart, you are the featured poem, read again and again.",
            "Like morning dew on rose petals, you are delicate beauty and precious grace.",
            "You are the prose to my poetry, the rhythm to my rhyme.",
            "In the library of my memories, you are every beautiful chapter.",
            "Your love is the eloquence my heart has always yearned to express.",
            "Like a painter's masterpiece, you are artistry in human form.",
            "You are the sonnet that my soul has been composing since time began."
        ],
        closings: 
        [
            "Poetically yours,\n{sender}",
            "With lyrical devotion,\n{sender}",
            "Forever your poet,\n{sender}",
            "In verse and in heart,\n{sender}",
            "Yours in rhyme and reason,\n{sender}",
            "With melodic love,\n{sender}",
            "Your devoted muse,\n{sender}",
            "In eternal stanza,\n{sender}",
            "With artistic affection,\n{sender}",
            "Your humble bard,\n{sender}"
        ]
    },
    passionate: 
    {
        openings: 
        [
            "My Passion, {partner},",
            "To my Fire, {partner},",
            "{partner}, my Desire,",
            "My Burning Love, {partner},",
            "Dearest {partner},",
            "To {partner}, who sets my soul ablaze,",
            "My Everything, {partner},",
            "To the One Who Consumes My Thoughts, {partner},",
            "My Flame, {partner},",
            "To {partner}, my heart's true desire,"
        ],
        bodies: 
        [
            "You ignite a fire within me that burns brighter with each passing moment.",
            "My soul yearns for yours with an intensity that defies all reason.",
            "You are the tempest that stirs my heart, the storm I never want to escape.",
            "Every fiber of my being aches to be near you, to feel your presence.",
            "You've awakened something primal in me, a love that knows no bounds.",
            "Like a moth to flame, I am drawn to you with irresistible force.",
            "You are my obsession, my beautiful madness, my sweetest addiction.",
            "Your touch sends electricity through my veins, awakening every sense.",
            "I crave you like air, need you like my heartbeat, want you like tomorrow.",
            "You've captured not just my heart, but my very essence, my soul.",
            "The depth of my love for you is fathomless, endless, infinite.",
            "You are the wild beating of my heart, the breath that sustains me.",
            "Every moment without you feels like an eternity of longing.",
            "You've become my entire universe, the center of my existence.",
            "My love for you burns with the intensity of a thousand suns.",
            "You consume my every thought, my every dream, my every desire.",
            "Like wildfire, my passion for you spreads through every part of my being.",
            "You are the thunder in my chest, the lightning in my veins.",
            "I am helplessly, hopelessly, completely devoted to you.",
            "You've awakened a hunger in me that only your love can satisfy."
        ],
        closings: 
        [
            "Passionately yours,\n{sender}",
            "With burning desire,\n{sender}",
            "Forever consumed by love,\n{sender}",
            "Intensely yours,\n{sender}",
            "With fierce devotion,\n{sender}",
            "Your eternal flame,\n{sender}",
            "Burning for you always,\n{sender}",
            "Yours with wild abandon,\n{sender}",
            "Forever ablaze for you,\n{sender}",
            "With untamed passion,\n{sender}"
        ]
    }
};

const loveQuotes = 
[
    "\"Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.\" - Unknown",
    "\"The best thing to hold onto in life is each other.\" - Audrey Hepburn",
    "\"Love is composed of a single soul inhabiting two bodies.\" - Aristotle",
    "\"You know you're in love when you can't fall asleep because reality is finally better than your dreams.\" - Dr. Seuss",
    "\"In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.\" - Maya Angelou",
    "\"Love is when the other person's happiness is more important than your own.\" - H. Jackson Brown Jr.",
    "\"The greatest happiness of life is the conviction that we are loved.\" - Victor Hugo",
    "\"To love and be loved is to feel the sun from both sides.\" - David Viscott",
    "\"Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.\" - Maya Angelou",
    "\"I have found the one whom my soul loves.\" - Song of Solomon 3:4"
];

const occasionMessages = 
{
    valentine: "\n\nOn this Valentine's Day, I want you to know that you make every day feel like a celebration of love.",
    anniversary: "\n\nAs we celebrate another year together, I'm reminded that with you, every day is an adventure I'm grateful to share.",
    birthday: "\n\nOn your special day, I celebrate not just your birth, but the incredible gift you are to my life.",
    apology: "\n\nI'm truly sorry for any hurt I've caused. You mean the world to me, and I promise to do better.",
    justbecause: "\n\nNo special reason needed – I just wanted you to know how much you mean to me, today and always."
};

const generateBtn = document.getElementById('generateBtn');
const surpriseBtn = document.getElementById('surpriseBtn');
const copyBtn = document.getElementById('copyBtn');
const downloadBtn = document.getElementById('downloadBtn');
const printBtn = document.getElementById('printBtn');
const shareBtn = document.getElementById('shareBtn');
const regenerateBtn = document.getElementById('regenerateBtn');

const yourNameInput = document.getElementById('yourName');
const partnerNameInput = document.getElementById('partnerName');
const moodSelect = document.getElementById('mood');
const letterLengthSelect = document.getElementById('letterLength');
const occasionSelect = document.getElementById('occasion');
const includeQuoteCheckbox = document.getElementById('includeQuote');
const addEmojisCheckbox = document.getElementById('addEmojis');

const outputSection = document.getElementById('outputSection');
const letterContent = document.getElementById('letterContent');
const toast = document.getElementById('toast');

let lastIndices = 
{
    opening: -1,
    body: -1,
    closing: -1
};

function getRandomElement(array, lastIndex) 
{
    if (array.length <= 1) return { element: array[0], index: 0 };
    
    let newIndex;
    do 
    {
        newIndex = Math.floor(Math.random() * array.length);
    } 
    while (newIndex === lastIndex && array.length > 1);
    
    return { element: array[newIndex], index: newIndex };
}

function getRandomBodyLines(bodyArray, count = 3) 
{
    const selectedLines = [];
    const usedIndices = new Set();
    
    while (selectedLines.length < count && usedIndices.size < bodyArray.length) 
    {
        const index = Math.floor(Math.random() * bodyArray.length);
        if (!usedIndices.has(index)) 
        {
            usedIndices.add(index);
            selectedLines.push(bodyArray[index]);
        }
    }
    
    return selectedLines.join(' ');
}

function generateProseLetter(yourName, partnerName, mood, length) 
{
    const template = letterTemplates[mood];
    
    const opening = getRandomElement(template.openings, lastIndices.opening);
    lastIndices.opening = opening.index;
    
    let bodyLineCount;
    switch(length) 
    {
        case 'short': bodyLineCount = 2; break;
        case 'long': bodyLineCount = 4; break;
        default: bodyLineCount = 3;
    }
    
    const body = getRandomBodyLines(template.bodies, bodyLineCount);
    
    const closing = getRandomElement(template.closings, lastIndices.closing);
    lastIndices.closing = closing.index;
    
    let letter = `${opening.element}\n\n${body}\n\n${closing.element}`;
    
    return letter.replace(/{partner}/g, partnerName).replace(/{sender}/g, yourName);
}

function generateLoveLetter() 
{
    const yourName = yourNameInput.value.trim();
    const partnerName = partnerNameInput.value.trim();
    const mood = moodSelect.value;
    const length = letterLengthSelect.value;
    const occasion = occasionSelect.value;
    const includeQuote = includeQuoteCheckbox.checked;
    const addEmojis = addEmojisCheckbox.checked;

    if (!yourName || !partnerName) 
    {
        alert('Please enter both names! 💝');
        return;
    }

    let letter = generateProseLetter(yourName, partnerName, mood, length);
    
    if (occasion && occasionMessages[occasion]) 
    {
        const lines = letter.split('\n\n');
        lines.splice(lines.length - 1, 0, occasionMessages[occasion].trim());
        letter = lines.join('\n\n');
    }
    
    if (includeQuote) 
    {
        const quote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
        letter = `${letter}\n\n${quote}`;
    }
    
    if (addEmojis) 
    {
        const emojiSets = 
        {
            romantic: ['💕', '❤️', '💖', '💗', '💝'],
            funny: ['😄', '😂', '🤪', '😜', '🤣'],
            cute: ['🥰', '💗', '🌸', '✨', '💫'],
            poetic: ['🌙', '⭐', '🌹', '🎭', '✨'],
            passionate: ['🔥', '💋', '❤️‍🔥', '💘', '😍']
        };
        const emojis = emojiSets[mood] || emojiSets.romantic;
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        letter = `${randomEmoji} ${letter} ${randomEmoji}`;
    }
    
    letterContent.textContent = letter;
    outputSection.style.display = 'block';
    
    updateLetterStats(letter);
    
    setTimeout(() => 
    {
        outputSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

function surpriseMe() 
{
    const yourName = yourNameInput.value.trim();
    const partnerName = partnerNameInput.value.trim();
    
    if (!yourName || !partnerName) 
    {
        alert('Please enter both names first! 💝');
        return;
    }
    
    const moods = ['romantic', 'funny', 'cute', 'poetic', 'passionate'];
    const lengths = ['short', 'medium', 'long'];
    const occasions = ['', 'valentine', 'anniversary', 'birthday', 'justbecause'];
    
    moodSelect.value = moods[Math.floor(Math.random() * moods.length)];
    letterLengthSelect.value = lengths[Math.floor(Math.random() * lengths.length)];
    occasionSelect.value = occasions[Math.floor(Math.random() * occasions.length)];
    includeQuoteCheckbox.checked = Math.random() > 0.5;
    addEmojisCheckbox.checked = Math.random() > 0.3;
    
    generateLoveLetter();
}

function updateLetterStats(text) 
{
    const words = text.trim().split(/\s+/).length;
    const characters = text.length;
    const readTime = Math.ceil(words / 200);
    
    document.getElementById('wordCount').textContent = words;
    document.getElementById('characterCount').textContent = characters;
    document.getElementById('readTime').textContent = readTime;
}

function copyToClipboard() 
{
    const text = letterContent.textContent;
    
    navigator.clipboard.writeText(text).then(() => 
    {
        showToast('Copied to clipboard! ✓');
    }).catch(err => 
    {
        alert('Failed to copy. Please try again!');
        console.error('Copy failed:', err);
    });
}

function downloadLetter() 
{
    const text = letterContent.textContent;
    const partnerName = partnerNameInput.value.trim() || 'Love';
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Love_Letter_for_${partnerName}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Letter downloaded! 💾');
}


function printLetter() 
{
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Love Letter</title>');
    printWindow.document.write('<style>');
    printWindow.document.write('body { font-family: "Poppins", sans-serif; padding: 40px; line-height: 2; }');
    printWindow.document.write('pre { white-space: pre-wrap; font-family: "Poppins", sans-serif; font-size: 14px; }');
    printWindow.document.write('</style></head><body>');
    printWindow.document.write('<pre>' + letterContent.textContent + '</pre>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}


function shareLetter() 
{
    const text = letterContent.textContent;
    
    if (navigator.share) 
    {
        navigator.share(
        {
            title: 'Love Letter',
            text: text
        }).catch(() => 
        {
            copyToClipboard();
        });
    } 
    else 
    {
        copyToClipboard();
        showToast('Letter copied! Share it with your loved one! 💕');
    }
}


function showToast(message) 
{
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => 
    {
        toast.classList.remove('show');
    }, 2000);
}

generateBtn.addEventListener('click', generateLoveLetter);
surpriseBtn.addEventListener('click', surpriseMe);
copyBtn.addEventListener('click', copyToClipboard);
downloadBtn.addEventListener('click', downloadLetter);
printBtn.addEventListener('click', printLetter);
shareBtn.addEventListener('click', shareLetter);
regenerateBtn.addEventListener('click', generateLoveLetter);

yourNameInput.addEventListener('keypress', (e) => 
{
    if (e.key === 'Enter') generateLoveLetter();
});

partnerNameInput.addEventListener('keypress', (e) => 
{
    if (e.key === 'Enter') generateLoveLetter();
});

function createFloatingHeart() 
{
    const heartsContainer = document.getElementById('hearts-container');
    if (!heartsContainer) return;
    
    const heart = document.createElement('div');
    heart.className = 'heart';
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    
    const size = Math.random() * 15 + 10;
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';
    
    heartsContainer.appendChild(heart);
    
    setTimeout(() => 
    {
        heart.remove();
    }, 8000);
}

setInterval(createFloatingHeart, 800);

for (let i = 0; i < 5; i++) 
{
    setTimeout(createFloatingHeart, i * 300);
}