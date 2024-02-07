<template>
  <v-container>
    <!-- Competencies -->
    <v-row>
      <v-col>
        <div class="ma-4">
          <v-img width="580" class="img rounded-xl" :aspect-ratio="1" src="@/assets/competencies.png"></v-img>
        </div>
      </v-col>
      <v-col class="ma-2">
        <p class="text-h4 mb-8 font-weight-bold">Desenvolvimento e crescimento de competências</p>
        <p class="text">Todo o trabalho desenvolvido no Luiza de Teodoro tem o objetivo de garantir uma aprendizagem sólida e significativa, que propicie a formação humana e científica, além da visão crítica voltada para a construção de um mundo mais justo e feliz.</p>
        <p class="text">Cada ação é planejada de maneira tal que os adolescentes encontrem na escola o aconchego e acolhimento necessários para o seu pleno desenvolvimento em todas as áreas, preparando-os para os desafios que a vida pode apresentar.</p>
        <v-btn x-large rounded width="50%" class="mt-10 text-button" style="background: #18a830; color: #fff"> Matricule-se </v-btn>
      </v-col>
    </v-row>

    <!-- Courses -->
    <div class="courses">
      <p class="mt-10 mb-10 text-h4 text-center font-weight-bold">NOSSOS CURSOS</p>
      <v-row>
        <v-col>
          <div class="ma-4" align="center">
            <v-img class="rounded-xl" width="335" :aspect-ratio="1" src="../assets/curso-informatica.png"></v-img>
            <v-btn class="mt-10 text-button" style="background: #18A830; color: #fff;">Informática</v-btn>
          </div>
        </v-col>
        <v-col>
          <div class="ma-4" align="center">
            <v-img class="rounded-xl" width="335" :aspect-ratio="1" src="../assets/curso-logistica.png"></v-img>
            <v-btn class="mt-10 text-button" style="background: #18A830; color: #fff;">Logística</v-btn>
          </div>
        </v-col>
        <v-col>
          <div class="ma-4" align="center">
            <v-img class="rounded-xl" width="335" :aspect-ratio="1" src="../assets/curso-enfermagem.png"></v-img>
            <v-btn class="mt-10 text-button" style="background: #18A830; color: #fff;">Enfermagem</v-btn>
          </div>
        </v-col>
      </v-row>
    </div>

     <!-- Infraestrutura -->
     <v-row class="mt-10">
      <v-col>
        <div class="ma-4">
          <v-img class="img rounded-xl" width="580" :aspect-ratio="1" src="../assets/infraestrutura-img.png"></v-img>
        </div>
      </v-col>
      <v-col class="ma-2">
        <p class="text-h3 mb-8 font-weight-bold">Infraestrutura LTV</p>
        <p class="text">Seu filho precisa de espaços inovadores, criativos e seguros para alcançar o melhor desenvolvimento cognitivo, psicossocial e físico. E é essa estrutura que o Luiza oferece a você!</p>
        <p class="text">Além de uma equipe multidisciplinar para acolher os alunos, dispomos de ambientes amplos, lúdicos, modernos e interativos para proporcionar o crescimento pleno do estudante.</p>
        <v-btn x-large rounded width="50%" class="text-button" style="background: #18a830; color: #fff">Garanta Já Sua Matrícula</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HomeView',

    data: () => ({
      //
  }),
}
</script>

<style scoped>
  .text{
    font-size: 20px;
    letter-spacing: 0.7px;
  }


  .img{
    margin: auto;
  }
</style>