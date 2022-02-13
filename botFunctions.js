const nodemon = require("nodemon");

function generateFact() {
    const facts = ['Her full name is Taylor Alison Swift.',
        'Taylor Swift is 32 years old and was born on December 13, 1989 in Reading, Pennsylvania.',
        'Taylor spent her early years growing up on her family’s Christmas tree farm in Montgomery County.',
        'Her mother’s name is Andrea Finlay & her father is Scott Kingsley Swift.',
        'Taylor’s father went to college at the University of Manoa, Hawaii.',
        'Andrea wanted to name her daughter Taylor because she didn’t people to be able to know her gender, just by reading her name.',
        'Taylor’s younger brother Austin attends Vanderbilt University and is also a freelance photographer in his spare time.',
        'Her grandmother was a professional opera singer, which inspired Swift from a young age.',
        'Over the years, Taylor’s had many nicknames, some of which are: Tay, Swifty, T-Swift, T-Swizzle, and T-Sweezy.',
        'At age 10, Swift was singing at a variety of local events, including contests & fairs.',
        'Age 11, she performed at a Philadelphia 76ers game and sag ‘The Star-Spangled Banner‘. She also won a local talent competition singing LeAnn Rimes’ ‘Big Deal‘.',
        'At age 12, a computer repairman taught Taylor how to play three chords on the guitar, which inspired her to learn to play the guitar and start songwriting. Her first song was called ‘Lucky You‘.',
        'Taylor wrote a 350 page novel when she was 12, which so far, has never been published.',
        'Taylor Swift is extremely talented, she can play the guitar, piano, ukulele, electric guitar and the banjo!',
        'She is also a talented painter.',
        'One of her favorite items of clothing she likes to wear is a pair of cowboy boots.',
        'Swifty’s lucky number is 13.',
        'She says Shania Twain is her biggest musical influence, however, she’s also ‘devoted’ to Britney Spears.',
        'After watching a Behind the Music special on Faith Hill, Taylor knew she had to move to Nashville, Tennessee to persue her musical dreams.',
        'At the age of 14, Taylor, along with her family moved to Nashville.',
        'Taylor Swift started using Myspace to develop her fan-base, which, at the time was a rather unique in country music',
        'In 2005, Taylor was told by an interviewer, “If music doesn’t work out, you could be a hair model“. In 2012, the same woman interviewed her again and apologized for saying it.',
        'In 2006, Taylor performed at The Bluebird Care in Nashville, which landed her with a contract with Scott Borchetta’s Big Machine Records.',
        'She is close friends with Selena Gomez.',
        'Taylor’s first single was called Tim McGraw, which reached the top ten songs for the country charts in 2006.',
        'Taylor’s first album was released in October 2006, which sold more than 2.5 million copies!',
        'Her favorite dessert is cheesecake.',
        'Swift dated singer Joe Jonas from July to October 2008, many of her songs in her Fearless album were about her breakup, including ‘Forever and Always‘ and ‘You’re Not Sorry‘.',
        'In 2009, Taylor Swift broke a country music world record by selling more digital downloads than any other country artist, selling over 20 million hits.',
        'Taylor played a rebellious teen called Haley Jones in an episode of CSI in 2009, because of her love for the TV show, she also did a CSI remix of her song “You’re Not Sorry“.',
        'In Late 2009, Taylor dated Taylor… Lautner – an actor made famous by his role in The Twilight Saga.',
        'When at home, Taylor doesn’t wear her contact lenses, she just keeps her glasses on.',
        'Swift owns an eight-bedroom summer house in coastal Watch Hill, Rhode Island.',
        'She also owns a Dassault Falcon 900 private jet – and an airport hangar at Nashville International Airport!',
        'To Kill A Mockingbird is one of her favorite books.',
        'In 2010, Taylor Swift became the youngest artist ever to win a Grammy Award for Album of the Year. She was age 20.',
        'She was in the film Valentine’s Day in 2010 as Felicia.',
        'In 2011, Swift was named Billboard’s Woman of the Year!',
        'In 2012, Lady Michelle Obama presented Taylor with ‘The Big Help Award‘ for her dedication to helping others.',
        'She voice acted the character of Audrey in The Lorax.',
        'She dated singer Harry Styles from One Direction in late 2012 to January 2013.',
        'In 2013 she appeared in an episode of New Girl as Elaine.',
        'As well as professional dancers, Taylor asked her fans to star in her music video for ‘Shake it Off‘.',
        'Taylor also played Rosemary in the film adaptation of The Giver in 2014.',
        '1989 is Taylor’s fifth studio album, which was released on October 27, 2014, through Big Machine Records.',
        'Before the release of 1989, Swift invited 89 of her biggest fans over to her house to listen to her album, Taylor also baked cookies for her guests.',
        '1989 was the top-selling album of 2014 beating Disney’s Frozen soundtrack. On New Years Eve she Tweeted “I can’t thank you enough for making 1989 the best selling album of 2014. NOW LETS GO CELEBRATE!“',
        'Taylor Swift helped a 4-year-old girl with terminal brain cancer cross the last item off her bucket list, which was “to dance to Shake it of with Tay Tay“. She went on FaceTime with the girl after she saw #ShakeItOffJalene trending on Twitter.',
        'She won her first BRIT award for International Female Solo Artist in February 2015.',
        'She Describes Folklore as Being Like Her Iconic Red Song, "Sad, Beautiful, Tragic"',
        '"My Tears Ricochet" Was the First Song She Wrote on the Album',
        'There are 8 different album covers to commemorate the fact that Folklore is Taylor’s 8th album',
        'Folklore is only the second time that Taylor has released an album in any month other than October or November (with Lover being the first)',
        'Taylor wrote and directed the music video for Cardigan. She also handled her own hair, makeup, and styling',
        'Folklore is the first Taylor Swift album to feature explicit songs (it actually has 5 in total)']
    return facts[Math.floor(Math.random() * facts.length) + 1];
}



function exes(name) {
    const brandon = {
        name: 'Brandon Borello',
        songs: 'Tim McGraw',
        history: 'Their relationship ended because he had to go to college. Taylor told USA Today, "He bought the album [Taylor Swift] and said he really loved it, which is sweet. His current girlfriend isnt too pleased with it, though." He was going away to college so she wanted to write him something to remember her goodbye.'
    }
    const drew = {
        name: 'Drew Hardwick',
        songs: 'Teardrops on My Guitar',
        history: 'Teardrops on My Guitar” was written about a boy she liked, whom she never actually dated. "Drew was a real person!" she tells. Drew was surprised when he heard his name in the song. "I never knew she liked me," Drew says. Taylor stated that two years after the song came out Drew showed up at her house and asked her on a date. She declined. "It was the perfect fairytale ending but a little too late."'
    }
    const joe = {
        name: 'Joe Jonas',
        songs: 'Holy Ground, Forever & Always, Better Than Revenge, Last Kiss, Mr. Perfectly Fine',
        history: 'Joe broke up with her over a 27-second phone call, which is something she has complained about on The Ellen DeGeneres Show. She got her record company to let her record a song about it, to add at the last minute to her album. “Forever & Always” is the name of that song. She also wrote, “Last Kiss” about him, and “Better Than Revenge” is about his ex-girlfriend, Camila Belle. The previously unreleased song "Mr. Perfectly Fine", from the re-recorded version of Fearless, is also rumored to be about him. "Holy Ground" from her 4th album Red is rumored to be a callback to Taylors relationship with him.'
    }
    const taylor = {
        name: 'Taylor Lautner',
        songs: 'Back to December, Apologize(cover)',
        history: 'Taylor Lautner became her boyfriend after they met on set for the film Valentine s Day. Their relationship was popularly known as Taylor Squared. They broke up in early 2010. She mentioned going to a hockey game with him during her October 29th, 2009 appearance on The Ellen Show. According to MTV he was more into her than she was into him, him going everywhere he could see her, but it was not working out. The song “Back to December” is suspected to be about him as an apology. Some of the lyrics go, "You gave me roses, and I left them there to die... So this is me swallowing my pride, standing in front of you saying I am sorry for that night... You gave me all your love and all I gave you was goodbye." At the end of the song, she asks for his forgiveness and hints at the fact she wants to be with him again. The couple hasn t reunited. At the 2010 American Music Awards, Swift performed the song and at the end added, "and he said... it s too late to apologize" from popular song the "Apologize" by the band One Republic.[2] She is alluding to the parody video Taylor Lautner made for "Apologize". Time magazine listed this as one of the top apologies of 2010.'
    }
    const john = {
        name: 'John Mayer',
        songs: 'Dear John, Ours, Superman, The Story of Us, “I Knew You Were Trouble',
        history: 'The songs “Dear John”, "Ours", "Superman", "The Story of Us", and “I Knew You Were Trouble” are rumored to be about him, whom she dated briefly after collaborating with him on a song, “Half of My Heart”. Their relationship was one of the many mentioned in the song "Coney Island" from Evermore, specifically the line "did I paint your bluest skies the darkest grey" which calls back to a lyric from the song, Dear John.'
    }
    const harry = {
        name: 'Harry Styles',
        songs: 'I Knew You Were Trouble, Out of the Woods, I Know Places, Clean, Style',
        history: 'It has been said that the singers met around November 2012, with a photo of them taking a stroll in Central Park breaking the internet the following month, as fans freaked out over the superstar couple. Harry Styles and Taylor Swift was the relationship we never saw coming, and despite their short-lived romance, we gained a lot of good music from the pair following their split. The One Direction song Perfect is rumored to be inspired by Styles romance with Swift. It s also rumored that the song "Wonderland" may be about him. Their relationship was one of the many mentioned in the song "Coney Island" from Evermore, specifically the line, "and when I got into the accident the sight that flashed before me was your face." Which calls back to their infamous snowmobile accident that was mentioned in the song, Out Of The Woods.'
    }
    const calvin = {
        name: 'Calvin Harris',
        songs: 'I Forgot That You Existed',
        history: 'The first relationship Taylor didn’t mind sharing on social media, Tay Tay and Calvin Harris were together for 15 months and made numerous joint appearances together at various events. Their split seemed less than amicable though, after Calvin shaded his ex multiple times on social media when their was conflict over the writing credits of his song ‘This Is What You Came For’ with Rihanna – a tune Taylor provided some vocals for under a pseudonym. Their relationship was one of the many mentioned in the song "Coney Island" from Evermore, specifically the line "But when I walked up to the podium I think that I forgot to say your name" which calls back to when Calvin gave a speech at the 2016 GQ Men of The Year and didn t thank Taylor for giving him a shout out.'
    }
    const tom = {
        name: 'Tom Hiddleston',
        songs: 'Getaway Car',
        history: 'Tom met Taylor when both were co-chairing the annual Met Gala in New York in May 2016. A video showing the two hanging out and dancing together went viral. In June 2016, a couple of weeks after the announcement of her breakup with DJ Calvin Harris, Tom and Taylor were photographed at a beach kissing near her home in Watch Hill, Rhode Island. Both were later spotted leaving Rhode Island aboard a private jet. They even attended Selena Gomez s concert in Nashville on June 21 with Taylor s longtime best friend Abigail Anderson and her boyfriend Matt. On September 6, 2016, reports came out that Tom and Taylor had split after three months of dating.'
    }
    const jake = {
        name: 'Jake Gyllenhaal',
        songs: 'All Too Well, The Moment I Knew, State of Grace, We Are Never Ever Getting Back Together, Sad Beautiful Tragic, I Bet You Think About Me, Red, Better Man, Babe',
        history: 'The duo initially sparked romance rumors after they attended Saturday Night Live together in October 2010 to support host Emma Stone. Shortly after their night out together, Swift appeared on The Ellen DeGeneres Show where she dodged questions about the Nightcrawler star, saying, "I am always optimistic about love." One month later, the couple went for a stroll through New York City while visiting his sister, Maggie Gyllenhaal, for Thanksgiving. In December 2020, the Crazy Heart star told Us Weekly that it was "great" having Swift over for dinner.The pretty well settled fact is that the two dated for a few months—truly, a few months—in late 2010, when she was 20 and he was 29. They broke up due to Jake not "feeling it" anymore and the intense media scrutiny that he received while they dated, although there was earliar signs like when he didnt show up to her birthday party, which was detailed in The Moment I Knew. It inspired many of her songs off Red, with the most recognized being All Too Well due to the heavily emotional lyrics.'
    }
    switch (name) {
        case 'jake':
            return jake;
        case 'tom':
            return tom;
        case 'calvin':
            return calvin;
        case 'joe':
            return joe;
        case 'harry':
            return harry;
        case 'john':
            return john;
        case 'drew':
            return drew;
        case 'brandon':
            return brandon;
        case 'taylor':
            return taylor;
    }
}




module.exports = {
    generateFact,
    exes
}