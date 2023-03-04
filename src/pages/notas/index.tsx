import { useState } from "react";
import { Input } from "../../components/input";
import { PageHeader } from "../../components/page-header";
import * as styled from "./styled";
import { colors } from "../../styles/colors";
import { FilterDirectionIcon } from "../../assets/icons/icon-filter-direction";
import { SearchIcon } from "../../assets/icons/icon-search";
import { AddIcon } from "../../assets/icons/icon-add";

export const NotasPage = () => {
  const [search, setSearch] = useState("");
  const [searchBarFocus, setSearchBarFocus] = useState(false);

  const [category, setCategory] = useState("Tudo");

  const [filter, setFilter] = useState("Nome");
  const [filterDirection, setFilterDirection] = useState(false);

  return (
    <styled.Container>
      <PageHeader title="Notas" subtitle="Gerencie as suas anotações" />
      <form className="input-group">
        <Input
          type="search"
          className="main-search"
          placeholder="Pesquisar notas"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setSearchBarFocus(true)}
          onBlur={() => setSearchBarFocus(false)}
          iconLeft={
            <div className={`icon-left${searchBarFocus ? " onFocus" : ""}`}>
              <SearchIcon />
            </div>
          }
          iconRight={
            <div
              className={`icon-right${searchBarFocus ? " onFocus" : ""}`}
              onClick={() => setSearch("")}
            >
              <AddIcon />
            </div>
          }
        />
        <select
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="category-search"
        >
          <option value="categoria 1">Tudo</option>
          <option value="categoria 1">Categoria 1</option>
          <option value="categoria 2">Categoria 2</option>
          <option value="categoria 3">Categoria 3</option>
          <option value="categoria 4">Categoria 4</option>
        </select>
        <select
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          className="sort-filter"
        >
          <option value="categoria 1">Nome</option>
          <option value="categoria 1">Data de criação</option>
          <option value="categoria 2">Data de alteração</option>
        </select>
        <div
          className="container-filter-direction"
          onClick={() => setFilterDirection(!filterDirection)}
        >
          <FilterDirectionIcon
            colorDominant={colors.theme.colors.primary.value}
            variantColor={colors.theme.colors.grey.value + "60"}
            toVariantColor={filterDirection}
          />
        </div>
      </form>
    </styled.Container>
  );
};
