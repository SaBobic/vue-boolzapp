const boolzapp = new Vue({
    name: 'BoolzApp',
    el: '#boolzapp',
    data: {
        user: {
            name: 'Undici',
            avatar: '_io'
            },
        contacts: [
            {
              name: 'Mike',
              avatar: '_1',
              visible: true,
              messages: [{
                date: '10/01/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent'
              },
              {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent'
              },
              {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received'
              }
              ],
            },
            {
              name: 'Max',
              avatar: '_2',
              visible: true,
              messages: [{
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent'
              },
              {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
              },
              {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'received'
              }
              ],
            },
            {
              name: 'Will',
              avatar: '_3',
              visible: true,
              messages: [{
                date: '28/03/2020 10:10:40',
                text: 'La Marianna va in campagna',
                status: 'received'
              },
              {
                date: '28/03/2020 10:20:10',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
              },
              {
                date: '28/03/2020 16:15:22',
                text: 'Ah scusa!',
                status: 'received'
              }
              ],
            },
            {
              name: 'Papà',
              avatar: '_4',
              visible: true,
              messages: [{
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
              },
              {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
              }
              ],
            },
            {
                name: 'Dustin',
                avatar: '_5',
                visible: true,
                messages: [{
                  date: '10/01/2020 15:30:55',
                  text: 'Hai portato a spasso il cane?',
                  status: 'sent'
                },
                {
                  date: '10/01/2020 15:50:00',
                  text: 'Ricordati di dargli da mangiare',
                  status: 'sent'
                },
                {
                  date: '10/01/2020 16:15:22',
                  text: 'Tutto fatto!',
                  status: 'received'
                }
                ],
              },
              {
                name: 'Lucas',
                avatar: '_6',
                visible: true,
                messages: [{
                  date: '20/03/2020 16:30:00',
                  text: 'Ciao come stai?',
                  status: 'sent'
                },
                {
                  date: '20/03/2020 16:30:55',
                  text: 'Bene grazie! Stasera ci vediamo?',
                  status: 'received'
                },
                {
                  date: '20/03/2020 16:35:00',
                  text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                  status: 'received'
                }
                ],
              },
              {
                name: 'Joyce',
                avatar: '_7',
                visible: true,
                messages: [{
                  date: '28/03/2020 10:10:40',
                  text: 'La Marianna va in campagna',
                  status: 'received'
                },
                {
                  date: '28/03/2020 10:20:10',
                  text: 'Sicuro di non aver sbagliato chat?',
                  status: 'sent'
                },
                {
                  date: '28/03/2020 16:15:22',
                  text: 'Ah scusa!',
                  status: 'received'
                }
                ],
              },
              {
                name: 'Steve',
                avatar: '_8',
                visible: true,
                messages: [{
                  date: '10/01/2020 15:30:55',
                  text: 'Lo sai che ha aperto una nuova pizzeria?',
                  status: 'sent'
                },
                {
                  date: '10/01/2020 15:50:00',
                  text: 'Si, ma preferirei andare al cinema',
                  status: 'received'
                }
                ],
              },
              {
                name: 'Nancy',
                avatar: '_9',
                visible: true,
                messages: [{
                  date: '10/01/2020 15:30:55',
                  text: 'Lo sai che ha aperto una nuova pizzeria?',
                  status: 'sent'
                },
                {
                  date: '10/01/2020 15:50:00',
                  text: 'Si, ma preferirei andare al cinema',
                  status: 'received'
                }
                ],
              },
              {
                name: '001',
                avatar: '_10',
                visible: true,
                messages: [{
                  date: '10/01/2020 15:30:55',
                  text: 'Lo sai che ha aperto una nuova pizzeria?',
                  status: 'sent'
                },
                {
                  date: '10/01/2020 15:50:00',
                  text: 'Si, ma preferirei andare al cinema',
                  status: 'received'
                }
                ],
              },
        ],
        currentContact: '',
        newMessageText: '',
        searchInputText: '',
        isNoChat: true,
    },
    computed: {
        filteredArray(){
          return this.contacts.map(contact =>{
            contact.visible = contact.name.toLowerCase().includes(this.searchInputText);
            return contact;
          });
        }
    },
    // 
    methods: {
        setActiveContact(i){
          if (this.isNoChat === true) this.isNoChat = false;
          this.currentContact = i;
        },
        getActualDate(){
          return dayjs().format('DD/MM/YYYY HH:mm:ss');
        },
        setMessage(text, status){
          const message = {
            date: this.getActualDate(),
            text: text,
            status: status,
          };
          this.contacts[this.currentContact].messages.push(message);
        },
        getResponse(){
          setTimeout(() => this.setMessage('ok', 'received'), 1000);
        },
        addMessage(){
          this.setMessage(this.newMessageText, 'sent');
          this.getResponse();
          this.newMessageText = '';
        },
        getFilterInputFocus(){
          this.$refs.filterInput.focus();
        },
        openMsgDropdown(i){
          if(this.$refs.messageMenu[i].classList.contains('clicked')){
            this.$refs.messageMenu[i].classList.remove('clicked');
            this.$refs.messageMenuContainer[i].classList.remove('clicked');
          } else {
            this.$refs.messageMenu[i].classList.add('clicked');
            this.$refs.messageMenuContainer[i].classList.add('clicked');
          }
        },
        deleteMessage(i){
          this.$refs.messageMenu[i].classList.remove('clicked');
          this.$refs.messageMenuContainer[i].classList.remove('clicked');
          this.contacts[this.currentContact].messages.splice(i, 1);
        },
    },
})