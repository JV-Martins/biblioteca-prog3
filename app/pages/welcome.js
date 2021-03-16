export const WelcomeComponent = {
    template: `<div class="font-sans">
                    <div class="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
                        <div class="relative sm:max-w-sm w-full">
                            <div class="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                            <div class="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                            <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">

                                    <div class="mt-7 flex justify-center font-bold">
                                        <h1 class="text-3xl">Bem Vindo!</h1>
                                    </div>
                                    <div class="m-4 flex justify-center" >
                                        <p class="text-gray-500 text-center" >Esta é uma aplicação CRUD desenvolvida juntamente com a turma de ADS na matéria de Programação 3.
                                        </p>
                                    </div>
                                    <div class="mt-7">
                                        <button @click="list" class="bg-red-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                            Listagem
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`,
    data() {
        return {
                }


        },
        methods: {
            list() {
                this.$router.push('/list');
            }
        }
}
