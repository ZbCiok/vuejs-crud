<template>
  <v-data-table
    :headers="headers"
    :items="categories"
    :items-per-page="5"
    :footer-props="{
      showFirstLastPage: true,
      firstIcon: 'mdi-arrow-collapse-left',
      lastIcon: 'mdi-arrow-collapse-right',
      prevIcon: 'mdi-minus',
      nextIcon: 'mdi-plus'
    }"    
    class="elevation-1 category-table"
    style="margin-top: 100px; margin-left: 300px; margin-right: 300px;"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <h1>Categories</h1>&nbsp;
        <h3>(flat structure)</h3>
        <p>&nbsp;</p>
        <div class="flex-grow-1"></div>

        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="success" dark class="mb-2" v-on="on">New Category</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span style="margin-bottom: 40px;" class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      style="width: 440px;"
                      v-model="editedItem.id"
                      label="Category Id:"
                      outlined
                    ></v-text-field>
                    <v-text-field
                      style="width: 440px;"
                      v-model="editedItem.name"
                      label="Category name:"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <div class="flex-grow-1"></div>
                <div v-if="dialogDelete === true">
                  <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="remove">Delete</v-btn>
                </div>
                <div v-else-if="dialogDelete === false">
                  <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                </div>
            </v-card-actions>

          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <template v-slot:item.action="{ item }">
      <v-icon medium color="success" class="mr-2" @click="editItem(item)">edit</v-icon>
      <v-icon medium color="success" @click="deleteItem(item)">delete</v-icon>
    </template>

    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>

<script>
import categoriesData from "../data/categories.json";
export default {
  data: () => ({
    dialogDelete: false,
    dialog: false,
    headers: [
      { text: "Id", value: "id", width: "6%" },
      { text: "Category Name", align: "left", sortable: true, value: "name" },
      { text: "Actions", value: "action", sortable: false, width: "8%" }
    ],
    categories: [],
    editedIndex: -1,  // New Category
    editedItem: {
      id: 0,
      name: ""
    },
    defaultItem: {
      id: 0,
      name: ""
    }
  }),

  computed: {
    formTitle() {
      if (this.dialogDelete) {
        return "Delete Category";
      } else if (this.editedIndex === -1) {
        return "New Category";
      } else if (this.editedIndex > -1) {
        return "Edit Category";
      }  
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.categories = categoriesData;
    },

    editItem(item) {
      this.dialogDelete = false;
      this.editedIndex = this.categories.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.dialogDelete = true;
      this.editedIndex = this.categories.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
        this.dialogDelete = false;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {  // Edited save
        Object.assign(this.categories[this.editedIndex], this.editedItem);
      } else {  // New save
        this.categories.push(this.editedItem);
      }
      this.close();
    },

    remove() {
      this.categories.splice(this.editedIndex, 1);
      this.close();
    }
  }
};
</script>

<style>
.category-table table th {
  background-color: lightgray;
  font-size: 20px !important;
}
</style>