class QuestionWithRadio
{
    constructor(Question, QuestionNumber_, AnswerA, AnswerB, AnswerC, AnswerD, CorectAnswer)
    {
        this.QuestionContent = '<fieldset class="QuestionFieldset"> <legend>Pytanie '+QuestionNumber_+' (jednokrotny wybór)</legend><span class="Question">'+Question+'</span><div class="Answer"><label style="cursor: pointer;"> ' + AnswerA + ' <input type="radio" value="A"  name="RadioButton" class="RadioButtonAndCheckBox"></label></div><div class="Answer"><label style="cursor: pointer;"> '+AnswerB+'<input type="radio" value="B"  name="RadioButton" class="RadioButtonAndCheckBox"></label></div><div class="Answer"><label style="cursor: pointer;">'+AnswerC+'<input type="radio" value="C" name="RadioButton" class="RadioButtonAndCheckBox"></label></div><div class="Answer"><label style="cursor: pointer">'+AnswerD+'<input type="radio" value="D"  name="RadioButton" class="RadioButtonAndCheckBox"></label></div> </fieldset>';

        this.CorectAnswer = CorectAnswer;
        
        this.Question_ = Question

        this.MaxPoints = 1

        this.Check = () =>
        {
            var empty = CheckRadioQuestion(this.CorectAnswer)
            return empty
        }

        this.QuestionType = "Radio"

        this.AnswerA = AnswerA

        this.AnswerB = AnswerB

        this.AnswerC = AnswerC

        this.AnswerD = AnswerD
    }
}

class QuestionWithCheckBoxs
{
    constructor(Question, QuestionNumber_, AnswerA, AnswerB, AnswerC, AnswerD, CorectAnswers)
    {
        this.QuestionContent = '<fieldset class="QuestionFieldset"> <legend>Pytanie '+QuestionNumber_+' (Wielokrotny wybór)</legend><span class="Question">'+Question+'</span><div class="Answer"><label style="cursor: pointer;"> ' + AnswerA + ' <input value="A" type="checkbox"  name="RadioButton" class="RadioButtonAndCheckBox"></label></div><div class="Answer"><label style="cursor: pointer;"> '+AnswerB+'<input type="checkbox" value="B"  name="RadioButton" class="RadioButtonAndCheckBox"></label></div><div class="Answer"><label style="cursor: pointer;">'+AnswerC+'<input type="checkbox" value="C"  name="RadioButton" class="RadioButtonAndCheckBox"></label></div><div class="Answer"><label style="cursor: pointer">'+AnswerD+'<input type="checkbox" value="D" name="RadioButton" class="RadioButtonAndCheckBox"></label></div></fieldset>';

        this.CorectAnswer = CorectAnswers;

        this.Question_ = Question

        this.MaxPoints = 1

        this.Check = () =>
        {
            var empty = CheckCheckBoxQuestion(this.CorectAnswer)
            return empty
        }

        this.QuestionType = "CheckBox"

        this.AnswerA = AnswerA

        this.AnswerB = AnswerB

        this.AnswerC = AnswerC

        this.AnswerD = AnswerD
    }
}

class QuestionWithSelect
{
    constructor(Question, QuestionNumber_, AnswerA, AnswerB, AnswerC, AnswerD, CorectAnswer)
    {
        this.QuestionContent = '<fieldset class="QuestionFieldset"> <legend>Pytanie ' + QuestionNumber_ + '</legend><span class="Question">' + Question + '</span><select class="SelectQuestion"><option class="SelectOption" value="A" selected>A : ' + AnswerA + '</option><option class="SelectOption" value="B">B : ' + AnswerB + '</option><option class="SelectOption" value="C">C : ' + AnswerC + '</option><option class="SelectOption" value="D">D : ' + AnswerD + '</option></select></fieldset>';

        this.CorectAnswer = CorectAnswer;

        this.Question_ = Question

        this.MaxPoints = 1

        this.Check = () =>
        {
            var empty = CheckSelectQuestio(this.CorectAnswer)
            return empty
        }

        this.QuestionType = "Select"

        this.AnswerA = AnswerA

        this.AnswerB = AnswerB

        this.AnswerC = AnswerC

        this.AnswerD = AnswerD
    }
}
class QuestionWithText
{
    constructor(Question, QuestionNumber_, CorectAnswer)
    {
        this.QuestionContent = '<fieldset class="QuestionFieldset"> <legend>Pytanie ' + QuestionNumber_ + '</legend><span class="Question">' + Question + '</span><input type="text" maxlength="23" class="TextQuestion"></fieldset>';

        this.CorectAnswer = CorectAnswer;

        this.Question_ = Question

        this.MaxPoints = 1

        this.Check = () =>
        {
            var empty = CheckTextQuestion(this.CorectAnswer)
            return empty
        }

        this.QuestionType = "Text"
    }
}

const HowManyQuestions = 15;

var QuestionNumber = 0;

let MaxPoints = 0;

var Name = "";

var Points = new Array(HowManyQuestions);

var UserAnswerwers = new Array(HowManyQuestions);

var CorectAnswers_ = new Array(HowManyQuestions);

var Questions = new Array(HowManyQuestions);

const QuestionDiv = document.querySelector("#QuestionHolder")

var WriteNameInput = true;

var ImBack = false;

var QuestionList = [
    new QuestionWithCheckBoxs("Zaznacz I sekretarzy PZPR", "", "Władysław Gomułka", "Bolesław Bierut", "Wojciech Jaruzelski", "Edward Gierek", "A, B, C, D"),
    new QuestionWithRadio("W którym roku założony został NSZZ 'Solidarność'?", "", "1968", "1970 ", "1980", "1989", "C"),
    new QuestionWithCheckBoxs("Zaznacz biznesy charakterystyczne dla PRL", "", "Pewex", "Nike", "Mercedes", "Poldron", "A"),
    new QuestionWithRadio("Który z modeli samochodów <span style='font-style:italic; font-weight:bold;'>nie</span> był produkowany przez FSO w czasach PRL?", "", "Syrena", "Żuk ", "Polonia", "Nysa", "C"),
    new QuestionWithRadio('Co wywołało strajki  1970 r?', '', "Wybór Karola Wojtyły na papieża", "Podwyżki cen żywności", "Cenzura spektaklu 'Dziady'", "Morderstwo ks. Jana Popiełuszki", "B"),
    new QuestionWithRadio('Jak nazywał się nurt w literaturze promujący ideologię komunistyczną?', '', "Romantyzm", "Sokratyzm", "Stalinizm", "Socrealizm", "D"),
    new QuestionWithRadio('Jak była nazywana akcja wysiedlania ludności ukraińskiej?', '', "Akcja 'Warta'", "Akcja 'Wisła'", "Akcja 'Rzeka'", "Akcja 'Strumyk'",'B'),
    new QuestionWithCheckBoxs('Czego dotyczyło referendum ludowe z 1946 r?', '', 'Przesiedlenia ludności ukraińskiej', 'Istnienia Senatu', 'Sprawy granic zachodnich', 'Sprawy granic wschodnich', 'B, C'),
    new QuestionWithRadio('Kto był głównym rywalem Gomułki w latach 60`?', '', "Bolesław Bierut", "Witold Pilecki", "Mieczysław Moczar", "Jerzy Popiełuszko",'C'),
    new QuestionWithCheckBoxs('Które z postanowień były rezultatem rozmów Okrągłego Stołu?', '', 'Przesiedlenia ludności ukraińskiej', 'Ponowne utworzenie Senatu', 'Ogłoszenie Lech Wałęsy prezydentem', 'Częściowo wolne wybory', 'B, D'),
    new QuestionWithRadio('Kiedy wysunięty został postulat powstania wolnych związków zawodowych?', '', "Podczas strajków w 1980 r.", "Po wprowadzeniu kartek na cukier", "W czasie wydarzeń marcowych", "Podczas referendum ludowego", 'A'),
    new QuestionWithRadio('Kto był głównym rywalem Gomułki przed rokiem 56?', '', "Bolesław Bierut", "Witold Pilecki", "Mieczysław Moczar", "Jerzy Popiełuszko",'A'),
    new QuestionWithRadio('O jaką walutę były oparte ceny w Pewexie?', '', "Polski złoty", "Dolar kanadyjski", "Marki niemieckie", "Dolar amerykański", 'D'),
    new QuestionWithCheckBoxs('Które z zespołów powstały w czasie PRL-u?', '', 'Czerwone Gitary', 'Czterej Pancerni i Pies', 'Republika', 'Enej', 'A, C'),
    new QuestionWithCheckBoxs('Które filmy wyreżyserował Andrzej Wajda', '', 'Człowiek z żelaza', 'Człowiek z marmuru', 'Sami Swoi', 'Człowiek z brązu', 'A, B'),
    new QuestionWithRadio('Która firma działała jako mecenas kultury w PRL-u?', '', "Pewex", "FSO", "Wedel", "Tymbark ", 'C'),
    new QuestionWithRadio('Czym był "Czterdziestolatek"?', '', "Postacią często pojawiającą się na plakatach propagandowych", "Książką na której podstawie powstał popularny serial", "Znanym filmem Andrzeja Wajdy", "Serialem który doczekał się kontynuacji jako książka", 'B'),
    new QuestionWithRadio('Jak inaczej były nazywane kolejki w PRL-u?', '', "Tunel", "Wieczność", "Ogonek", "Długa", 'C'),
    new QuestionWithRadio('Co można było kupić z pomocą kartek na papierosy?', '', "Tylko papierosy", "Papierosy i alkohol", "Papierosy i słodycze", "Papierosy i kawę", 'C'),
    new QuestionWithCheckBoxs('Jaka kara groziła za fałszowanie kartek?', '', "Grzywna", "Pozbawienie wolności", "Obóz pracy", "Śmierć", 'A, B'),
    new QuestionWithCheckBoxs('Kto zazwyczaj był staczem kolejkowym?', '', "Rodzina", "Znajomi", "Emeryci", "Niepełnosprawni", 'A, B, C')
];

var alreadyGenerated = [];

for(i = 0; i < HowManyQuestions; i++) {
    
    do {
        var QuestionPicked = randomNumber(0, QuestionList.length);
    } while(alreadyGenerated.includes(QuestionPicked))
    
    alreadyGenerated.push(QuestionPicked);
    
    Questions[i] = QuestionList[QuestionPicked];

    MaxPoints += 1;

    CorectAnswers_[i] = Questions[i].CorectAnswer;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


var CheckYourAnserwers = () =>
{
    document.querySelector('#BackButtonEater').innerHTML = '<button class="Buttons_" onclick="Reset()" type="button">Jeszcze <br> raz!!!</button>'

    document.querySelector('#GoNextButtonEater').innerHTML = '<button class="Buttons_" onclick="QuizEnd ()" type="button">Powrót do strony końcowej</button>'

    QuestionDiv.innerHTML = ""

    document.querySelector("#ScoreBoardEater").innerHTML =  '<div class="scoreboard">'

    document.querySelector(".scoreboard").innerHTML = '<div style="padding: 15px;" id="PaddingDiv"></div>'

    document.querySelector("#PaddingDiv").innerHTML = '<div class="Column">Pytanie</div><div class="Column">Poprawna odp</div><div class="Column">Twoja odp</div><div style="clear:both;"></div>'

    for(var i = 0; i < HowManyQuestions; i++)
    {
        var Class_ = "ScoreDivWTF"

        var _Answer_ = ""

        var ColorForTextCorrectAnserwer = ''

        if(UserAnswerwers[i] == "" || UserAnswerwers[i] == null)
        {
            UserAnswerwers[i] = "Brak !"
        }
        
        if(Questions[i].QuestionType != "Text")
        {
            Class_ = "ScoreDiv"
            // odp A
            if(Questions[i].CorectAnswer.includes('A'))
            {
                _Answer_ += '<div style="color:rgb(13, 192, 22);" class="ABCD_Answer"><span class="CorrectAnswer">A</span> ' + Questions[i].AnswerA + ' </div> <div style="clear:both;height:6px;"></div>';
            }
            else
            {  
                _Answer_ += '<div  class="ABCD_Answer"><span class="BadAnswer">A</span> ' + Questions[i].AnswerA + ' </div> <div style="clear:both;height:6px;"></div>';
            }
            // odp B
            if(Questions[i].CorectAnswer.includes('B'))
            {
                _Answer_ += '<div  style="color:rgb(13, 192, 22);"class="ABCD_Answer"><span class="CorrectAnswer">B</span> ' + Questions[i].AnswerB + ' </div> <div style="clear:both;height:6px;"></div>';
            }
            else
            {  
                _Answer_ += '<div class="ABCD_Answer"><span class="BadAnswer">B</span> ' + Questions[i].AnswerB + ' </div> <div style="clear:both;height:6px;"></div>';
            }
            // odp C
            if(Questions[i].CorectAnswer.includes('C'))
            {
                _Answer_ += '<div style="color:rgb(13, 192, 22);" class="ABCD_Answer"><span class="CorrectAnswer">C</span> ' + Questions[i].AnswerC + ' </div> <div style="clear:both;height:6px;"></div>';
            }
            else
            {  
                _Answer_ += '<div class="ABCD_Answer"><span class="BadAnswer">C</span> ' + Questions[i].AnswerC + ' </div> <div style="clear:both;height:6px;"></div>';
            }
            // odp D
            if(Questions[i].CorectAnswer.includes('D'))
            {
                _Answer_ += '<div style="color:rgb(13, 192, 22);" class="ABCD_Answer"><span class="CorrectAnswer">D</span> ' + Questions[i].AnswerD + ' </div> <div style="clear:both;"></div>';
            }
            else
            {  
                _Answer_ += '<div class="ABCD_Answer"><span class="BadAnswer">D</span> ' + Questions[i].AnswerD + ' </div> <div style="clear:both;"></div>';
            }
        }
        else
        {
            _Answer_  = CorectAnswers_ [i]
            ColorForTextCorrectAnserwer = 'style="color:rgb(13, 192, 22);"';
        }
        

        var Styles = ""

        if(Points[i] == 0)
        {
            Styles = "border: 2px solid red;color: red;" 
        }
        else if(Points[i] == Questions[i].MaxPoints)
        {
            Styles = "border: 2px solid #37ff00;color: #37ff00;"
        }

        document.querySelector("#PaddingDiv").innerHTML += '<div class="ScoreDivWTF" >'+ Questions[i].Question_ +'</div><div class="' +  Class_ + '" ' + ColorForTextCorrectAnserwer + '>'+ _Answer_ +'</div></div><div class="ScoreDivWTF" id="UserAnsDiv" style="'+Styles+'" ><span style="font-weight: 700; font-size: 32px">'+ UserAnswerwers[i] +'</span></div><div style="clear:both;">'
    }

    QuestionDiv.innerHTML += '</div>'
}

var QuizEnd = () =>
{                                                                   
    var sum = 0

    for(var i = 0; i < Points.length ; i++)
    {
        sum += Points[i]
    }

    document.querySelector("#ScoreBoardEater").innerHTML = ""

    document.querySelector("#TakeNameEater").innerHTML = ""

    document.querySelector('#BackButtonEater').innerHTML = '<button class="Buttons_" onclick="Reset()" type="button">Jeszcze <br> raz!!!</button>'

    document.querySelector('#GoNextButtonEater').innerHTML = '<button class="Buttons_" onclick="CheckYourAnserwers()" type="button">Sprawdź swoje odpowiedzi</button>'

    document.querySelector("#QuestionNumber").innerHTML = "";

    document.querySelector('#QuestionNumber').style = "visibility: hidden;"   

    var percent = (sum / MaxPoints) * 100

    var grade = "niedostetczny";

    var Hello_ = "Musisz jeszcze trochę poczytać... "

    if(percent >= 40)
    {
        grade = "dopuszczający";

        Hello_ = "Postaraj się bardziej "
    }
    if(percent >= 66)
    {
        grade = "dostateczny";

        Hello_ = "Mogło być lepiej "
    }
    if(percent >= 75)
    {
        grade = "dobry";

        Hello_ = "Dobrze wykonałeś swoją pracę "
    }
    if(percent >= 90)
    {
        grade = "bardzo dobry";

        Hello_ = "Brawo. Bardzo dobra ocena "
    }
    if(percent >= 99)
    {
        grade = "celujący";

        Hello_ = "Jesteś prawdziwym ekspertem "
    }   

    QuestionDiv.style = "text-align: center;font-size:32px" 
    QuestionDiv.innerHTML = '<span style="font-size: 42px;">'+ Hello_ + Name + " !</span><br><br>";
    QuestionDiv.innerHTML += "Zdobyłeś " + sum + "/" + MaxPoints + " punktów";
    QuestionDiv.innerHTML += "<br><br>"
    QuestionDiv.innerHTML += "Zdobyłeś " + percent.toFixed(2) + "%"
    QuestionDiv.innerHTML += "<br><br>"
    QuestionDiv.innerHTML += "Zdobyłeś ocenę " + grade
 }

var Reset = () =>
{
    location.reload()
}

var CheckCheckBoxQuestion = (CorectAnswer) =>
{
    var Answers = document.querySelectorAll(".RadioButtonAndCheckBox");

    var Answer = "";

    var points = 0;

    for(var i = 0; i < 4; i++)
    {
        if(Answers[i].checked)
        {
            Answer += Answers[i].value + ", "
        }
    }

    var Answer_ = Answer
    
    Answer = ""

    for(var i = 0;i < Answer_.length - 2;i++)
    {
        Answer += Answer_[i]
    }

    if (Answer == CorectAnswer)
    {
        points = 1
    }
    else
    {
        points = 0;
    }

    UserAnswerwers[QuestionNumber - 1] = Answer

    Points[QuestionNumber - 1] = points

    if(Answer == "")
    {
        return true
    }
    else
    {
        return false
    }
} 

var CheckRadioQuestion = (CorectAnswer) =>
{
    var Answers = document.querySelectorAll(".RadioButtonAndCheckBox");

    var Answer = "";

    var points = 0;

    for(var i = 0; i < 4; i++)
    {
        if(Answers[i].checked)
        {
            Answer += Answers[i].value
        }
    }

    if(Answer == CorectAnswer)
    {
        points = 1
    }

    UserAnswerwers[QuestionNumber - 1] = Answer

    Points[QuestionNumber - 1] = points

    if(Answer == "")
    {
        return true
    }
    else
    {
        return false
    }
} 

var CheckSelectQuestio = (CorectAnswer) =>
{
    var Answer = document.querySelector(".SelectQuestion").value;

    var points = 0;

    if(Answer == CorectAnswer)
    {
        points = 1
    }

    UserAnswerwers[QuestionNumber - 1] = Answer

    Points[QuestionNumber - 1] = points

    if(Answer == "")
    {
        return true
    }
    else
    {
        return false
    }
} 

var CheckTextQuestion = (CorectAnswers) =>
{
    var Answer = document.querySelector(".TextQuestion").value;

    var CorectAnswer = CorectAnswers.split('!')

    var points = 0;
    for(var i = 0; i < CorectAnswer.length ;i++)
    {
        if(Answer == CorectAnswer[i])
        {
            points = 2
    
            CorectAnswer[QuestionNumber - 1] = Answer
        }
    }


    UserAnswerwers[QuestionNumber - 1] = Answer

    Points[QuestionNumber - 1] = points

    if(Answer == "")
    {
        return true
    }
    else
    {
        return false
    }
} 

function IfQuestionEqualsZero ()
{
    document.querySelector("#TakeNameEater").innerHTML = '<div id="TakeName">Podaj Imię <br><br><input type="text" id="NameTaker" value="'+ Name +'"></div>'

    QuestionDiv.innerHTML = "";

    document.querySelector('#BackButtonEater').innerHTML = ""

    document.querySelector("#QuestionNumber").innerHTML = "";

    document.querySelector('#QuestionNumber').style = "visibility: hidden;"   
}

function IfQuestionIsHigherThanZero()
{
    document.querySelector("#TakeNameEater").innerHTML = "";

    document.querySelector('#BackButtonEater').innerHTML = '<button class="Buttons_" onclick="BackToPreviosQuestion()" type="button">Cofam się!!!</button>'

    document.querySelector("#QuestionNumber").innerHTML = "Pytanie " + QuestionNumber + "/" + HowManyQuestions;

    document.querySelector('#QuestionNumber').style = "visibility: visible;"
    if(QuestionNumber == HowManyQuestions)
    {
        document.querySelector('#GoNextButtonEater').innerHTML = '<button class="Buttons_" onclick="GoToNextQuestion()" type="button">Zakończ quiz</button>'
    }
    else
    {
        document.querySelector('#GoNextButtonEater').innerHTML = '<button class="Buttons_" onclick="GoToNextQuestion()" type="button">Idę dalej !!!</button>'
    }
   
}

function GoToNextQuestion()
{

    var IsEmpty_ = false; 

    document.querySelector("#AlertEater").innerHTML = ""

    if(ImBack == false)
    {
        if(QuestionNumber == 0)
        {
            Name = document.querySelector("#NameTaker").value

            if(Name == "")
            {
                QuestionNumber -= 1;
                document.querySelector("#AlertEater").innerHTML = '<div id="Alert">  <div id="AlertCloseDiv"><label id="CloseAlertLabel"><i class="icon-cancel"></i><button type="button" id="CloseAlert" onclick="CloseAlert()"></button></label></div> <div id="AlertText"></div> <div id="AlertCloseDiv"></div><div id="AlertText">Musisz coś podać !!!</div> <div id="AlertCloseDiv"></div> <div id="AlertText"></div></div>'; 
                WriteNameInput = false;
                document.querySelector("#AlertEater").style = "display: block;"
            }
            else if(Name.length > 32)
            {
                QuestionNumber -= 1;
                document.querySelector("#AlertEater").innerHTML = '<div id="Alert">  <div id="AlertCloseDiv"><label id="CloseAlertLabel"><i class="icon-cancel"></i><button type="button" id="CloseAlert" onclick="CloseAlert()"></button></label></div> <div id="AlertText"></div> <div id="AlertCloseDiv"></div><div id="AlertText">Imię ma do 32 znaków !!!</div> <div id="AlertCloseDiv"></div> <div id="AlertText"></div></div>'; 
                WriteNameInput = false;
                document.querySelector("#AlertEater").style = "display: block;"
            }
            else if ( (Name.includes('>')) || (Name.includes('<')) )
            {
                QuestionNumber -= 1;
                document.querySelector("#AlertEater").innerHTML = '<div id="Alert">  <div id="AlertCloseDiv"><label id="CloseAlertLabel"><i class="icon-cancel"></i><button type="button" id="CloseAlert" onclick="CloseAlert()"></button></label></div> <div id="AlertText"></div> <div id="AlertCloseDiv"></div><div id="AlertText"><span style="font-size:28px;">użyto nie dozwolonego znaku "&#60;" lub "&#62;"</span></div> <div id="AlertCloseDiv"></div> <div id="AlertText"></div></div>';
                WriteNameInput = false;
                document.querySelector("#AlertEater").style = "display: block;"
            }
        }
        if(QuestionNumber > 0)
        {
            IsEmpty_ = Questions[QuestionNumber - 1].Check()
        }
    }

    ImBack = false 
 
    if(IsEmpty_ == true)
    {
        document.querySelector("#AlertEater").innerHTML = '<div id="Alert">  <div id="AlertCloseDiv"><label id="CloseAlertLabel"><i class="icon-cancel"></i><button type="button" id="CloseAlert" onclick="CloseAlert()"></button></label></div> <div id="AlertText"></div> <div id="AlertCloseDiv"></div><div id="AlertText">Musisz coś podać !!!</div> <div id="AlertCloseDiv"></div> <div id="AlertText"></div></div>'; 
        document.querySelector("#AlertEater").style = "display: block;"
    }
    else
    {
        if( QuestionNumber < -1)
        {
            QuestionNumber = -1;
        }
    
        QuestionNumber += 1;
    
        if(QuestionNumber > 0)
        {
            IfQuestionIsHigherThanZero();
        }
    
        if(HowManyQuestions < QuestionNumber)
        {
            QuizEnd();
        }
        else if(QuestionNumber == 0)
        {
            if(WriteNameInput == true)  
            {
                IfQuestionEqualsZero();
            } 
            else
            {
                WriteNameInput = true;
            }
        }
        else
        {
            QuestionDiv.innerHTML = Questions[QuestionNumber - 1].QuestionContent
        }
    }
}

function BackToPreviosQuestion()
{
    QuestionNumber -= 2;
    ImBack = true
    GoToNextQuestion();
}

var CloseAlert = () =>
{
    document.querySelector("#AlertEater").style = "display: none;" 
}     

//Odliczanie
const element = document.querySelector(".histhack");
    
function lz(i) {
    return `${i}`.padStart(2, "0");
}


function calculateTimeDifference({year, month, day, hour = 0, minutes = 0, seconds = 0}) {
    const now = new Date();

   
    const importantDate = new Date(year, month-1, day, hour, minutes, seconds);
    const msInADay = 24 * 60 * 60 * 1000; 
    const timeDifference = (importantDate.getTime() - now.getTime());

    const endTime = timeDifference < 0; 

    const eDaysToDate = timeDifference / msInADay;
    const daysToDate = Math.floor(eDaysToDate);

    
    let daysToDateFix = (daysToDate < 1)? 1 : daysToDate;

    const eHoursToDate = (eDaysToDate % daysToDateFix)*24;
    const hoursToDate = Math.floor(eHoursToDate);

    const eMinutesToDate = (eHoursToDate - hoursToDate)*60;
    const minutesToDate = Math.floor(eMinutesToDate);

    const eSecondsToDate = Math.floor((eMinutesToDate - minutesToDate)*60);
    const secondsToDate = Math.floor(eSecondsToDate);

    return {
        days : daysToDate,
        hours : hoursToDate,
        minutes : minutesToDate,
        seconds : secondsToDate,
        endTime
    }
}


function showTimer(date) {
    const dateParts = date.split("-");
    if (dateParts.length === 1) return;

    
    const [year, month, day, hour = 0, minutes = 0, seconds = 0] = dateParts;

    
    const timeDiff = calculateTimeDifference({ year, month, day, hour, minutes, seconds });

    {
  
        const {days, hours, minutes, seconds, endTime} = timeDiff;

        if (!endTime) {
            element.innerHTML = `
                Spiesz się... Do końca konkursu #HISTHACK pozostało:
                <b>
                ${hours} godziny
                ${minutes} minut i
                ${lz(seconds)} sekund</b>
            `;

            setTimeout(() => showTimer(date), 1000);
        } else {
            element.innerHTML = `Ważna data upłynęła`;
        }
    }
}

showTimer("2023-04-14-18-10");