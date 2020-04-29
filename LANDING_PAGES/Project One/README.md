# Landing Page One 

Well, this is the first project to be placed in this repository, and it is a page developed for an internship selection process. However,
this project is intended to be just a source of learning and **all credits** for the **designer** and **page content** should be given to **[Agencia Fast 
Way](https://www.agenciafastway.com.br)**, the company responsible for the selection process.

![page designer](https://github.com/UserZeca/Landing-Pages/blob/master/LANDING_PAGES/imgs-readme/project-one/img1.png)

## Tasks
The objective was to complete the follows tasks:
- [X] Create responsive HTML / CSS based on the layout above
- [X] Implement a phone mask, in the following format (99) 99999-9999, using Javascript
- [X] Be as faithful as possible to the proposed designer

## Development

The development was made with the following technologies:

* HTML
* CSS 
* [Bootstrap 4](https://getbootstrap.com) (CDN)
* Javascript

The entire page was built responsively, using the **bootstrap** features, mainly the [grid system](https://getbootstrap.com.br/docs/4.1/layout/grid/).

* ## Form
  
  - ### Name Field
    The name field allows only **letters** and **spaces** to be inserted.
    
    ![namefield](https://github.com/UserZeca/Landing-Pages/blob/master/LANDING_PAGES/imgs-readme/project-one/nameField.gif)
  
  - ### Email Field
    The name email, has a simple verification process.</br>
    Only inputs, which follow the following rules, are accepted:
    - Do not have spaces;
    - Owning the @;
    - Have some character after the @;
    - Have some character before the @;
    - Have at least one dot after the character after the @;
    - Have some character after the period.

    ![emailfield](https://github.com/UserZeca/Landing-Pages/blob/master/LANDING_PAGES/imgs-readme/project-one/emailField.gif)
      
    Note that the send button is enabled only when the email@domain.something format is reached.
  
  - ### Phone Mask
    The phone's mask is designed not to accept letters and special characters. For this, it uses functions and events, which control the     text field, so that the field is in the format (99) 99999-9999.
    ![phonemask](https://github.com/UserZeca/Landing-Pages/blob/master/LANDING_PAGES/imgs-readme/project-one/phonemask.gif?classes=float-left)






