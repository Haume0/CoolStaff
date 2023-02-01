<main>
  <div class="w-screen h-screen flex">
    <div class="flex flex-col w-[25rem] relative m-auto">
      <div class="flex flex-row">
        <img src="/logo.svg" class="w-20" alt="">
        <div class="flex flex-col self-end ml-4">
          <h2 class="font-Nunito font-bold text-4xl">CoolStaff</h2>
          <h4 class="font-Nunito font-medium text-base">Password Generator</h4>
        </div>
      </div>
      <div class="w-full h-[5rem] group relative rounded-lg flex mt-6 bg-_grey">
        <span class="text-2xl font-Nunito m-auto font-bold">{password}</span>
        <button on:click={()=>{createPassword(settings.length,settings)}} class="absolute right-2 flex p-1 rounded-md opacity-0 ease-in-out duration-200 transition-opacity group-hover:opacity-100 border-[1px] group active:border-_blue border-white items-center justify-center top-2 w-7 h-7">
          <svg class="stroke-white fill-transparent" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M19.933 13.041a8 8 0 1 1-9.925-8.788c3.899-1 7.935 1.007 9.425 4.747"/><path d="M20 4v5h-5"/></g></svg>
        </button>
        <button on:click={()=>{navigator.clipboard.writeText(password)}} class="absolute left-2 flex p-1 rounded-md opacity-0 ease-in-out duration-200 transition-opacity group-hover:opacity-100 border-[1px] group active:border-_blue border-white items-center justify-center top-2 w-7 h-7">
          <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M9 18q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Zm0-2h9V4H9v12Zm-4 6q-.825 0-1.413-.587Q3 20.825 3 20V7q0-.425.288-.713Q3.575 6 4 6t.713.287Q5 6.575 5 7v13h10q.425 0 .713.288q.287.287.287.712t-.287.712Q15.425 22 15 22ZM9 4v12V4Z"/></svg>
        </button>
        <input type="number" name="" bind:value={settings.length} class=" rounded-md opacity-0 group-hover:opacity-100 absolute font-Nunito text-sm text-center font-bold right-2 bottom-2 w-14 h-6 bg-_darkgrey" id="">
      </div>
      <div class="w-full h-auto grid mt-4 grid-flow-col grid-cols-3 gap-2">
        <button on:click={()=>{settings.number = !settings.number}} class="bg-_grey col-span-1 items-center flex flex-row h-8 rounded-full">
          <div class:!bg-_blue={settings.number} class="w-5 h-5 my-auto ml-[6px] rounded-full ease-in-out duration-300 bg-_pink"></div>
          <span class="font-Nunito mx-auto font-semibold">Numbers</span>
        </button>
        <button on:click={()=>{settings.symbols = !settings.symbols}} class="bg-_grey col-span-1 items-center flex flex-row h-8 rounded-full">
          <div class:!bg-_blue={settings.symbols} class="w-5 h-5 my-auto ml-[6px] rounded-full ease-in-out duration-300 bg-_pink"></div>
          <span class="font-Nunito mx-auto font-semibold">Symbols</span>
        </button>
        <button on:click={()=>{settings.uCase = !settings.uCase}} class="bg-_grey col-span-1 items-center flex flex-row h-8 rounded-full">
          <div class:!bg-_blue={settings.uCase} class="w-5 h-5 my-auto ml-[6px] rounded-full ease-in-out duration-300 bg-_pink"></div>
          <span class="font-Nunito mx-auto font-semibold">UpperCase</span>
        </button>
      </div>
      <div class="flex flex-col mt-4">
        <div class="w-full h-[2px] bg-_grey mb-2"></div>
        <h1 class="font-Nunito font-bold text-lg">©️CoolStaff <span class="text-zinc-500 font-Nunito text-sm">A project by <a href="https://github.com/Haume0" class="text-zinc-300 hover:text-_pink " rel="noreferrer">Haume</a></span></h1>
        <h3 class="text-sm font-Nunito font-medium text-zinc-400">This project is an open source project, you can find all the codes on my github.</h3>
        <div class="flex flex-row gap-2">
          <a class="text-base font-Nunito hover:text-_pink" href="https://www.patreon.com/Haume" rel="noreferrer">\ Buy me coffee</a>
          <a class="text-base font-Nunito hover:text-_pink" href="https://spica.systems" rel="noreferrer">\ SpicaTeam</a>
          <a class="text-base font-Nunito hover:text-_blue" href="https://discord.gg/kCwrKaRj2f" rel="noreferrer">\ Discord</a>
          <a class="text-base font-Nunito hover:text-_blue" href="https://github.com/Haume0" rel="noreferrer">\ Github</a>
        </div>
      </div>
    </div>
  </div>
</main>

<script>
let alphabet = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
let Alphabet = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']
let number = [1,2,3,4,5,6,7,8,9,0]
let symbols = ["!","#","$","½","&","+","_",",","."]
let usedLists = []
let settings = {
	length: 8,
	alphabet:true,
	number:false,
	symbols: false,
	uCase: false,
}
if(localStorage.getItem('settings') != null){
	settings = JSON.parse(localStorage.getItem('settings'))
}else {localStorage.setItem('settings',JSON.stringify(settings))}
let password;
function createPassword(length,lists){
	password = ''
	if(lists.number == true){
		usedLists = [...usedLists,...number]
	}
	if(lists.alphabet == true){
		usedLists = [...usedLists,...alphabet]
	}
	if(lists.symbols == true){
		usedLists = [...usedLists,...symbols]
	}
	if(lists.uCase == true){
		usedLists = [...usedLists,...Alphabet]
	}
	 for(var i=0;i<=length;i++){
		password += usedLists[(Math.random()*usedLists.length).toFixed(0)]
	 }
	 localStorage.setItem('settings',JSON.stringify(settings))
}
createPassword(settings.length,settings)
</script>