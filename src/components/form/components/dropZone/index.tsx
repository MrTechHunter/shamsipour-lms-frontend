import React, { useCallback, useEffect, useState } from 'react';
import { Field } from 'formik';
import { FileError, useDropzone } from 'react-dropzone';
import { v4 as uuid } from 'uuid';
import bytesToSize from '../../../../helpers/bytesToSize';
import { UploadError } from './uploadErrors';

export interface I_File {
  id?: number | string;
  file: File;
  url?: string;
  onDelete: (file: File) => void;
  preview: string;
  children?: any;
  errors: FileError[];
}

const DropZoneWrapper = (props: any) => {
  const { field, form, options } = props;
  const [files, setFiles] = useState<I_File[]>([]);
  const [defaultOptions, setOptions] = useState<{ [param: string]: any }>({
    multiple: true,
    maxSize: 4200000,
    maxFilesNumber: 3,
    maxFiles: 1,
    accept: {
      'image/*': ['.png', '.jpeg', '.jpg', '.gif'],
    },
  });
  const [rejectedFiles, setRejectedFiles] = useState<{ code: string; filename: string; format: string }[]>([]);
  useEffect(() => {
    setOptions({ ...defaultOptions, ...options });
  }, [options]);
  const onDrop = useCallback((acceptedFiles: any, rejectedFiles: any) => {
    if (rejectedFiles.length) {
      setRejectedFiles(rejectedFiles.map((file: any) => ({ ...file, id: uuid() })));
      return;
    }
    setRejectedFiles([]);
    const acceptedFilesWithPreview = acceptedFiles.map((file: any) => ({
      file,
      id: uuid(),
      errors: [],
      onDelete,
      preview: URL.createObjectURL(file),
    }));
    setFiles((prevFiles: any) => {
      const totalFiles = [...prevFiles, ...acceptedFilesWithPreview];
      form.setFieldValue(
        field.name,
        totalFiles.map((fileObj: any) => fileObj.file)
      );
      return totalFiles;
    });
  }, []);
  function onDelete(id: any): void {
    setFiles(files.filter((file) => file.id !== id));
  }

  const { getRootProps, getInputProps, isDragAccept, isDragActive, isDragReject } = useDropzone({
    ...defaultOptions,
    onDrop,
  });
  return (
    <>
      <div
        {...getRootProps()}
        className={`min-w-full w-96 flex mb-2 justify-center border-opacity-40 border-2 rounded border-dashed items-center font-medium bg-blue_050 text-xs cursor-pointer h-32 focus:outline-none
          ${isDragActive && isDragReject && 'border-error'}
          ${isDragActive && isDragAccept && 'border-green'}
          ${!isDragActive && 'border-blue_800'}
        `}
      >
        <input {...getInputProps()} name={field.name} />
        <div className="w-80 font-medium text-center text-xs m-auto leading-5 text-black_60 p-1 direction-rtl">
          <div>
            برای آپلود فایل‌های مربوطه، فرمت‌های
            <span className="font-bold text-black_87 uppercase direction-ltr">
              {Object.keys(defaultOptions['accept']).map((item: string) => {
                return (
                  <span className="px-1" key={Math.random()}>
                    {defaultOptions['accept'][item].toString()}
                  </span>
                );
              })}
            </span>
            با حداکثر حجم <span className="font-bold text-black_87">{bytesToSize(defaultOptions.maxSize, 'fa')}</span>{' '}
            قابل قبول می باشد.
          </div>
        </div>
      </div>
      {rejectedFiles.length !== 0 && <UploadError rejectedFiles={rejectedFiles} />}
      <div className={`grid ${files.length > 1 ? 'grid-cols-2 gap-x-4' : 'grid-cols-1'} mb-3 `}>
        {!!files.length &&
          files?.map((file: I_File) => (
            <div className={`flex my-1 w-full justify-around`} key={file.id}>
              {!file.errors.length && (
                <div className={`flex my-1 w-full`}>
                  <div className="w-full h-16 p-1 flex border-2 border-blue_100 rounded-lg justify-between items-center bg-blue_050">
                    <div className="w-2/3 flex h-full">
                      <div className="w-12 h-full">
                        <img
                          className="w-full h-full rounded-md overflow-hidden"
                          src={`${file.file.type === 'application/pdf' ? '/assets/pdf.png' : file.preview}`}
                          alt={file.file.name}
                        />
                      </div>
                      <div className="w-10/12 items-center flex flex-wrap h-full">
                        <div className="w-full flex">
                          <p
                            dir="ltr"
                            className="whitespace-nowrap flex justify-end text-xs leading-4 font-medium w-full h-full text-black_87 overflow-hidden mr-2 overflow-ellipsis"
                          >
                            {file.file.name}
                          </p>
                        </div>
                        <div className="w-full flex">
                          <p
                            dir="ltr"
                            className="whitespace-nowrap flex justify-end text-xs font-medium leading-3 w-full h-full text-black_87 overflow-hidden mr-2 overflow-ellipsis"
                          >
                            {bytesToSize(file.file.size, 'en')}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="h-full w-1/3 flex justify-end items-center ml-2">
                      <a href={file.preview} download={file.file.name}>
                        <i className=" cursor-pointer text-xl leading-6 text-primary flex justify-end font-semibold lms-download" />
                      </a>
                      <a onClick={() => onDelete(file.id)}>
                        <i className="cursor-pointer text-xl leading-6 mr-2 flex justify-end font-semibold lms-Delete text-primary" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </>
  );
};
const File = ({ loading, name, ...props }: { loading: boolean; name: string; props: any }) => {
  return (
    <div>
      {!loading ? (
        <Field name={name} {...props} component={DropZoneWrapper} />
      ) : (
        <div className="w-full h-52 flex justify-center items-center">در حال بارگذاری ...</div>
      )}
    </div>
  );
};

export default File;
