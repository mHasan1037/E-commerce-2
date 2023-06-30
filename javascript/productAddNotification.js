const addNotificationStyle = {
    position: 'fixed',
    top: '5px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgb(102, 209, 102)',
    color: 'white',
    padding: '10px 15px',
    borderRadius: '10px',
    zIndex: '100'
}

//notification after adding a product that will pop up on top of the page
export function productAddedNotification(proName){
    const addNotification = document.createElement('div')
          for(const style in addNotificationStyle){
            addNotification.style[style] = addNotificationStyle[style]
          }
          addNotification.innerHTML = `${proName} is successfully added. Check cart list!`
          document.body.appendChild(addNotification)

          setTimeout(()=>{
                for(const style in addNotificationStyle){
                    addNotification.style[style] = ''
                }
          }, 2500)
}