import React, { useContext } from "react";
import { AppContext } from "../contexts/provider";
import Detail from "../components/Detail/Detail";
import { useParams } from "react-router-dom";
import { useQueryId } from "../hooks/useParams";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

export default function ProductDetail() {
  const [state, setId] = useContext(AppContext);

  // Se obtiene el id de la url del navegador
  const { id } = useParams();

  // Setea en caso de modificacion o autoload.
  useQueryId("id", state, setId, id);

  const detail = state.detail;

  return (
    <>
      <Breadcrumb />
      {state.detail ? <Detail productDetail={detail.item} /> : null}
    </>
  );
}
