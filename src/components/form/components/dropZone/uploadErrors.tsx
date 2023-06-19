import React, { useEffect, useState } from 'react';
import ErrorMessages from './errorMessages';

interface I_Error {
  file: any;
  errors: { code: string; message: string }[];
  id: string;
}
export function UploadError({ rejectedFiles }: { rejectedFiles: any }) {
  const handleDelete = (id: string) => {
    setTooManyFiles([]);
    setOtherError(
      otherError.filter((item: I_Error) => {
        return item.id !== id;
      })
    );
  };
  const [tooManyFiles, setTooManyFiles] = useState<I_Error[]>([]);
  const [otherError, setOtherError] = useState<I_Error[]>([]);
  useEffect(() => {
    rejectedFiles.forEach((rejectedFile: I_Error[] | any) => {
      rejectedFile.errors.forEach(({ code }: { code: string }) => {
        if (code !== 'too-many-files') {
          setOtherError((prevRejectedFile: I_Error[]) => [...prevRejectedFile, rejectedFile]);
        } else {
          setTooManyFiles((prevRejectedFile: I_Error[]) => [...prevRejectedFile, rejectedFile]);
        }
      });
    });
  }, [rejectedFiles]);
  return (
    <div className={`grid ${rejectedFiles.length > 1 ? 'grid-cols-2 gap-x-4' : 'grid-cols-1'} mb-3 `}>
      {!tooManyFiles.length &&
        otherError?.map((rejectedFile: I_Error, key: number) => {
          return rejectedFile.errors.map(({ code }: { code: string }) => {
            return (
              <div
                className="flex my-1 whitespace-nowrap w-full justify-between items-center bg-blue_050 h-9 rounded"
                key={key}
              >
                <i className="flex mr-2  me-Paper text-error" />
                <p
                  className="text-xs mr-2 overflow-ellipsis overflow-hidden w-11/12"
                  title={ErrorMessages(rejectedFile.file.name, code)}
                  key={Math.random()}
                >
                  {ErrorMessages(rejectedFile.file.name, code)}
                </p>
                <a
                  onClick={() => handleDelete(rejectedFile.id)}
                  className="flex ml-2 cursor-pointer w-1/12 justify-end"
                >
                  <i className="me-close_FILL0_wght400_GRAD0_opsz48-21 text-error border border-error rounded-3xl" />
                </a>
              </div>
            );
          });
        })}
      {tooManyFiles && !!tooManyFiles.length && (
        <div className="flex my-1 whitespace-nowrap w-full justify-between items-center bg-blue_050 h-9 rounded">
          <i className="flex mr-2  me-Paper text-error" />
          <p
            className="text-xs mr-2 overflow-ellipsis overflow-hidden w-11/12"
            title={ErrorMessages('', 'too-many-files')}
            key={Math.random()}
          >
            {ErrorMessages('', 'too-many-files')}
          </p>
          <a
            onClick={() => {
              setTooManyFiles([]);
              setOtherError([]);
            }}
            className="flex ml-2 cursor-pointer w-1/12 justify-end"
          >
            <i className="me-close_FILL0_wght400_GRAD0_opsz48-21 text-error border border-error rounded-3xl" />
          </a>
        </div>
      )}
    </div>
  );
}
