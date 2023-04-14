        var changeImage2 = (button, name) =>{
            
            button.src = "img/" + name
        }

        var changeImage3 = (button, name) => {

            button.src = "img/" + name
        }
        
        var changeImage = (button, imageName, imageName2, desc, display) => {
            
            if(display == "block"){

                desc.style.opacity = 0;
                desc.style.display = "block"

                setTimeout(function(){desc.style.opacity = 0.1}, 20)
                setTimeout(function(){desc.style.opacity = 0.2}, 40)
                setTimeout(function(){desc.style.opacity = 0.3}, 60)
                setTimeout(function(){desc.style.opacity = 0.4}, 80)
                setTimeout(function(){desc.style.opacity = 0.5}, 100)
                setTimeout(function(){desc.style.opacity = 0.6}, 120)
                setTimeout(function(){desc.style.opacity = 0.7}, 140)
                setTimeout(function(){desc.style.opacity = 0.8}, 160)
                setTimeout(function(){desc.style.opacity = 0.9}, 180)
                setTimeout(function(){desc.style.opacity = 1}, 200)
            }
            if(display == "none"){

                desc.style.opacity = 1
                desc.style.display = "block"

                setTimeout(function(){desc.style.opacity = 0.9}, 20)
                setTimeout(function(){desc.style.opacity = 0.8}, 40)
                setTimeout(function(){desc.style.opacity = 0.7}, 60)
                setTimeout(function(){desc.style.opacity = 0.6}, 80)
                setTimeout(function(){desc.style.opacity = 0.5}, 100)
                setTimeout(function(){desc.style.opacity = 0.4}, 120)
                setTimeout(function(){desc.style.opacity = 0.3}, 140)
                setTimeout(function(){desc.style.opacity = 0.2}, 160)
                setTimeout(function(){desc.style.opacity = 0.1}, 180)
                setTimeout(function(){desc.style.opacity = 0}, 200)
            }

            setTimeout(function(){changeImage2(button, imageName)}, 100)

            setTimeout(function(){changeImage3(button, imageName2)}, 200)
        }

        class Button{

            constructor(descId, imgId, image, hoverImage, hoverImage2, description, linkToDescription, side){

                this.side = side
                this.imgId = imgId
                this.image = image
                this.hoverImage = hoverImage
                this.hoverImage2 = hoverImage2
                this.descId = descId
                if(side == 1){
                    this.code = '<div class="button"><a href="' + linkToDescription + '"> <img id="' + imgId + '" class="img" src="img/'+ image + '" width="150" height="150" alt=""> </a><div class="description" id="' + descId + '">' + description + '</div></div>';    
                }
                else if(side == 2){
                    this.code = '<div class="button"><div class="descriptionRight" id="' + descId + '">' + description + '</div><a href="' + linkToDescription + '"> <img id="' + imgId + '" class="img" src="img/'+ image + '" width="150" height="150" alt=""> </a></div>';
                } 
                else if(side == 3){

                    this.code = '<div class="button"><div class="descriptionRightLeft" id="' + descId + '">' + description + '</div><a href="' + linkToDescription + '"> <img id="' + imgId + '" class="img" src="img/'+ image + '" width="150" height="150" alt=""> </a></div>';
                } 
                else if(side == 4){
                    this.code = '<div class="button"><div class="descriptionLeftRight" id="' + descId + '">' + description + '</div><a href="' + linkToDescription + '"> <img id="' + imgId + '" class="img" src="img/'+ image + '" width="150" height="150" alt=""> </a></div>';
                }
            }
        }

        var container = document.querySelector("#container") 
        

        var Button1 = new Button("Desc1", "BTN1", "gov1.png", "gov2.png", "gov3.png", "Boleslaw Bierut", "Bolesław Bierut.html", 1);

        container.innerHTML += Button1.code

        var Button1Button = document.querySelector("#" + Button1.imgId) 

        var Button1Desc = document.querySelector("#" + Button1.descId) 

        Button1Button.addEventListener("mouseenter", function(){
            changeImage(Button1Button, Button1.hoverImage, Button1.hoverImage2, Button1Desc, "block")
        })
        Button1Button.addEventListener("mouseout", function(){
        changeImage(Button1Button, Button1.hoverImage, Button1.image, Button1Desc, "none")
        })


        var container2 = document.querySelector("#container2") 

        var Button2 = new Button("Desc2", "BTN2", "hlybek1.png", "hlybek2.png", "hlybek3.png", "Pewex", "Pewex.html", 4);

        container2.innerHTML += Button2.code

        var Button2Button = document.querySelector("#" + Button2.imgId) 

        var Button2Desc = document.querySelector("#" + Button2.descId) 

        Button2Button.addEventListener("mouseenter", function(){
            changeImage(Button2Button, Button2.hoverImage, Button2.hoverImage2, Button2Desc, "block")
        })
        Button2Button.addEventListener("mouseout", function(){
        changeImage(Button2Button, Button2.hoverImage, Button2.image, Button2Desc, "none")
        })



        var container3 = document.querySelector("#container3") 

        var Button3 = new Button("Desc3", "BTN3", "gov1.png", "gov2.png", "gov3.png", "Śmierć Witolda Pileckiego", "Smierc Witolda Pileckiego.html", 3);

        container3.innerHTML += Button3.code

        var Button3Button = document.querySelector("#" + Button3.imgId) 

        var Button3Desc = document.querySelector("#" + Button3.descId) 

        Button3Button.addEventListener("mouseenter", function(){
            changeImage(Button3Button, Button3.hoverImage, Button3.hoverImage2, Button3Desc, "block")
        })
        Button3Button.addEventListener("mouseout", function(){
        changeImage(Button3Button, Button3.hoverImage, Button3.image, Button3Desc, "none")
        })



        var container4 = document.querySelector("#container4") 

        var Button4 = new Button("Desc4", "BTN4", "hlybek1.png", "hlybek2.png", "hlybek3.png", "FSO", "FSO.html", 2);

        container4.innerHTML += Button4.code

        var Button4Button = document.querySelector("#" + Button4.imgId) 

        var Button4Desc = document.querySelector("#" + Button4.descId) 

        Button4Button.addEventListener("mouseenter", function(){
            changeImage(Button4Button, Button4.hoverImage, Button4.hoverImage2, Button4Desc, "block")
        })
        Button4Button.addEventListener("mouseout", function(){
        changeImage(Button4Button, Button4.hoverImage, Button4.image, Button4Desc, "none")
        })




        var container5 = document.querySelector("#container5") 
        

        var Button5 = new Button("Desc5", "BTN5", "gov1.png", "gov2.png", "gov3.png", "Władysław Gomułka", "Wladyslaw Gomulka.html", 1);

        container5.innerHTML += Button5.code

        var Button5Button = document.querySelector("#" + Button5.imgId) 

        var Button5Desc = document.querySelector("#" + Button5.descId) 

        Button5Button.addEventListener("mouseenter", function(){
            changeImage(Button5Button, Button5.hoverImage, Button5.hoverImage2, Button5Desc, "block")
        })
        Button5Button.addEventListener("mouseout", function(){
        changeImage(Button5Button, Button5.hoverImage, Button5.image, Button5Desc, "none")
        })



        var container6 = document.querySelector("#container6") 

        var Button6 = new Button("Desc6", "BTN6", "gov1.png", "gov2.png", "gov3.png", 'Akcja “Wisła”', "Akcja Wisla.html", 3);

        container6.innerHTML += Button6.code

        var Button6Button = document.querySelector("#" + Button6.imgId) 

        var Button6Desc = document.querySelector("#" + Button6.descId) 

        Button6Button.addEventListener("mouseenter", function(){
            changeImage(Button6Button, Button6.hoverImage, Button6.hoverImage2, Button6Desc, "block")
        })
        Button6Button.addEventListener("mouseout", function(){
        changeImage(Button6Button, Button6.hoverImage, Button6.image, Button6Desc, "none")
        })

        


        var container7 = document.querySelector("#container7") 
        

        var Button7 = new Button("Desc7", "BTN7", "gov1.png", "gov2.png", "gov3.png", "Edward Gierek", "Edward Gierek.html", 1);

        container7.innerHTML += Button7.code

        var Button7Button = document.querySelector("#" + Button7.imgId) 

        var Button7Desc = document.querySelector("#" + Button7.descId) 

        Button7Button.addEventListener("mouseenter", function(){
            changeImage(Button7Button, Button7.hoverImage, Button7.hoverImage2, Button7Desc, "block")
        })
        Button7Button.addEventListener("mouseout", function(){
        changeImage(Button7Button, Button7.hoverImage, Button7.image, Button7Desc, "none")
        })




        var container8 = document.querySelector("#container8") 

        var Button8 = new Button("Desc8", "BTN8", "gov1.png", "gov2.png", "gov3.png", 'Powstanie “Solidarności”', "Powstanie Solidarnosci.html", 3);

        container8.innerHTML += Button8.code

        var Button8Button = document.querySelector("#" + Button8.imgId) 

        var Button8Desc = document.querySelector("#" + Button8.descId) 

        Button8Button.addEventListener("mouseenter", function(){
            changeImage(Button8Button, Button8.hoverImage, Button8.hoverImage2, Button8Desc, "block")
        })
        Button8Button.addEventListener("mouseout", function(){
        changeImage(Button8Button, Button8.hoverImage, Button8.image, Button8Desc, "none")
        })


        var container9 = document.querySelector("#container9") 
        

        var Button9 = new Button("Desc9", "BTN9", "gov1.png", "gov2.png", "gov3.png", "Wojciech Jaruzelski", "Wojciech Jaruzelski.html", 1);

        container9.innerHTML += Button9.code

        var Button9Button = document.querySelector("#" + Button9.imgId) 

        var Button9Desc = document.querySelector("#" + Button9.descId) 

        Button9Button.addEventListener("mouseenter", function(){
            changeImage(Button9Button, Button9.hoverImage, Button9.hoverImage2, Button9Desc, "block")
        })
        Button9Button.addEventListener("mouseout", function(){
        changeImage(Button9Button, Button9.hoverImage, Button9.image, Button9Desc, "none")
        })



        
        var container10 = document.querySelector("#container10") 

        var Button10 = new Button("Desc10", "BTN10", "gov1.png", "gov2.png", "gov3.png", "Morderstwo ks. Jerzego Popiełuszki", "Morderstwo ks Jerzego Popieluszki.html", 3);

        container10.innerHTML += Button10.code

        var Button10Button = document.querySelector("#" + Button10.imgId) 

        var Button10Desc = document.querySelector("#" + Button10.descId) 

        Button10Button.addEventListener("mouseenter", function(){
            changeImage(Button10Button, Button10.hoverImage, Button10.hoverImage2, Button10Desc, "block")
        })
        Button10Button.addEventListener("mouseout", function(){
        changeImage(Button10Button, Button10.hoverImage, Button10.image, Button10Desc, "none")
        })




        var container11 = document.querySelector("#container11") 

        var Button11 = new Button("Desc11", "BTN11", "hlybek1.png", "hlybek2.png", "hlybek3.png", "Wedel", "Wedel.html", 2);

        container11.innerHTML += Button11.code

        var Button11Button = document.querySelector("#" + Button11.imgId) 

        var Button11Desc = document.querySelector("#" + Button11.descId) 

        Button11Button.addEventListener("mouseenter", function(){
            changeImage(Button11Button, Button11.hoverImage, Button11.hoverImage2, Button11Desc, "block")
        })
        Button11Button.addEventListener("mouseout", function(){
        changeImage(Button11Button, Button11.hoverImage, Button11.image, Button11Desc, "none")
        })




        var container12 = document.querySelector("#container12") 

        var Button12 = new Button("Desc12", "BTN12", "hlybek1.png", "hlybek2.png", "hlybek3.png", "Muzyka PRL", "Muzyka PRL.html", 4);

        container12.innerHTML += Button12.code

        var Button12Button = document.querySelector("#" + Button12.imgId) 

        var Button12Desc = document.querySelector("#" + Button12.descId) 

        Button12Button.addEventListener("mouseenter", function(){
            changeImage(Button12Button, Button12.hoverImage, Button12.hoverImage2, Button12Desc, "block")
        })
        Button12Button.addEventListener("mouseout", function(){
        changeImage(Button12Button, Button12.hoverImage, Button12.image, Button12Desc, "none")
        })







        


        var container13 = document.querySelector("#container13") 

        var Button13 = new Button("Desc13", "BTN13", "hlybek1.png", "hlybek2.png", "hlybek3.png", "Literatura w PRL", "Literatura w PRL.html", 2);

        container13.innerHTML += Button13.code

        var Button13Button = document.querySelector("#" + Button13.imgId) 

        var Button13Desc = document.querySelector("#" + Button13.descId) 

        Button13Button.addEventListener("mouseenter", function(){
            changeImage(Button13Button, Button13.hoverImage, Button13.hoverImage2, Button13Desc, "block")
        })
        Button13Button.addEventListener("mouseout", function(){
        changeImage(Button13Button, Button13.hoverImage, Button13.image, Button13Desc, "none")
        })




        var container14 = document.querySelector("#container14") 

        var Button14 = new Button("Desc14", "BTN14", "hlybek1.png", "hlybek2.png", "hlybek3.png", "Kinematografia PRL", "Kinematografia PRL.html", 4);

        container14.innerHTML += Button14.code

        var Button14Button = document.querySelector("#" + Button14.imgId) 

        var Button14Desc = document.querySelector("#" + Button14.descId) 

        Button14Button.addEventListener("mouseenter", function(){
            changeImage(Button14Button, Button14.hoverImage, Button14.hoverImage2, Button14Desc, "block")
        })
        Button14Button.addEventListener("mouseout", function(){
        changeImage(Button14Button, Button14.hoverImage, Button14.image, Button14Desc, "none")
        })






        


        var container15 = document.querySelector("#container15") 

        var Button15 = new Button("Desc15", "BTN15", "hlybek1.png", "hlybek2.png", "hlybek3.png", "Kartki", "Kartki.html", 2);

        container15.innerHTML += Button15.code

        var Button15Button = document.querySelector("#" + Button15.imgId) 

        var Button15Desc = document.querySelector("#" + Button15.descId) 

        Button15Button.addEventListener("mouseenter", function(){
            changeImage(Button15Button, Button15.hoverImage, Button15.hoverImage2, Button15Desc, "block")
        })
        Button15Button.addEventListener("mouseout", function(){
        changeImage(Button15Button, Button15.hoverImage, Button15.image, Button15Desc, "none")
        })




        var container16 = document.querySelector("#container16") 

        var Button16 = new Button("Desc16", "BTN16", "hlybek1.png", "hlybek2.png", "hlybek3.png", "Kolejki w PRL", "Kolejki w PRL.html", 4);

        container16.innerHTML += Button16.code

        var Button16Button = document.querySelector("#" + Button16.imgId) 

        var Button16Desc = document.querySelector("#" + Button16.descId) 

        Button16Button.addEventListener("mouseenter", function(){
            changeImage(Button16Button, Button16.hoverImage, Button16.hoverImage2, Button16Desc, "block")
        })
        Button16Button.addEventListener("mouseout", function(){
        changeImage(Button16Button, Button16.hoverImage, Button16.image, Button16Desc, "none")
        })